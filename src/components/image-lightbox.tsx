"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import Image from "next/image";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type PointerEvent as ReactPointerEvent,
    type WheelEvent as ReactWheelEvent,
} from "react";

interface ImageLightboxProps {
    images: string[];
    currentIndex: number | null;
    projectTitle?: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export function ImageLightbox({
    images,
    currentIndex,
    projectTitle = "Project",
    onClose,
    onPrev,
    onNext,
}: ImageLightboxProps) {
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
    const lastTap = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Pinch state
    const pinchStart = useRef({ dist: 0, zoom: 1 });

    // Reset zoom when image changes
    useEffect(() => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (currentIndex === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.5, MAX_ZOOM));
            if (e.key === "-") setZoom((z) => Math.max(z - 0.5, MIN_ZOOM));
            if (e.key === "0") { setZoom(1); setPan({ x: 0, y: 0 }); }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [currentIndex, onClose, onPrev, onNext]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (currentIndex !== null) {
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = ""; };
        }
    }, [currentIndex]);

    // ─── Scroll Zoom (desktop) ───
    const handleWheel = useCallback((e: ReactWheelEvent) => {
        e.stopPropagation();
        const delta = e.deltaY > 0 ? -0.25 : 0.25;
        setZoom((z) => {
            const next = Math.min(Math.max(z + delta, MIN_ZOOM), MAX_ZOOM);
            if (next === 1) setPan({ x: 0, y: 0 });
            return next;
        });
    }, []);

    // ─── Pointer drag for pan ───
    const handlePointerDown = useCallback(
        (e: ReactPointerEvent) => {
            if (zoom <= 1) return;
            setIsDragging(true);
            dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
        },
        [zoom, pan]
    );

    const handlePointerMove = useCallback(
        (e: ReactPointerEvent) => {
            if (!isDragging || zoom <= 1) return;
            const dx = e.clientX - dragStart.current.x;
            const dy = e.clientY - dragStart.current.y;
            setPan({ x: dragStart.current.panX + dx, y: dragStart.current.panY + dy });
        },
        [isDragging, zoom]
    );

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // ─── Double-tap to zoom ───
    const handleDoubleTap = useCallback(() => {
        if (zoom > 1) {
            setZoom(1);
            setPan({ x: 0, y: 0 });
        } else {
            setZoom(2.5);
        }
    }, [zoom]);

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            const now = Date.now();
            if (now - lastTap.current < 300) {
                handleDoubleTap();
            }
            lastTap.current = now;
        },
        [handleDoubleTap]
    );

    // ─── Touch pinch-to-zoom ───
    useEffect(() => {
        const container = containerRef.current;
        if (!container || currentIndex === null) return;

        const getDistance = (touches: TouchList) => {
            const dx = touches[0].clientX - touches[1].clientX;
            const dy = touches[0].clientY - touches[1].clientY;
            return Math.hypot(dx, dy);
        };

        const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                pinchStart.current = { dist: getDistance(e.touches), zoom };
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const newDist = getDistance(e.touches);
                const scale = newDist / pinchStart.current.dist;
                const newZoom = Math.min(Math.max(pinchStart.current.zoom * scale, MIN_ZOOM), MAX_ZOOM);
                setZoom(newZoom);
                if (newZoom === 1) setPan({ x: 0, y: 0 });
            }
        };

        container.addEventListener("touchstart", onTouchStart, { passive: false });
        container.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchmove", onTouchMove);
        };
    }, [currentIndex, zoom]);

    if (currentIndex === null || !images[currentIndex]) return null;

    const isZoomed = zoom > 1;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                {/* Top bar: counter + zoom controls */}
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6">
                    {/* Counter */}
                    <div className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Zoom controls */}
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.5, MIN_ZOOM)); }}
                            className="rounded-full border border-white/10 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white backdrop-blur-sm"
                            aria-label="Zoom out"
                        >
                            <ZoomOut size={16} />
                        </button>
                        <span className="min-w-[3rem] text-center text-xs font-medium text-zinc-400" onClick={(e) => e.stopPropagation()}>
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.5, MAX_ZOOM)); }}
                            className="rounded-full border border-white/10 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white backdrop-blur-sm"
                            aria-label="Zoom in"
                        >
                            <ZoomIn size={16} />
                        </button>
                        {isZoomed && (
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setZoom(1); setPan({ x: 0, y: 0 }); }}
                                className="ml-1 rounded-full border border-white/10 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white backdrop-blur-sm"
                                aria-label="Reset zoom"
                            >
                                <RotateCcw size={16} />
                            </button>
                        )}
                    </div>

                    {/* Close */}
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="rounded-full border border-white/10 bg-zinc-900/70 p-2.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white backdrop-blur-sm"
                        aria-label="Close lightbox"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Previous */}
                {images.length > 1 && !isZoomed && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-zinc-900/80 p-2.5 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white sm:left-4 sm:p-3"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} className="sm:h-6 sm:w-6" />
                    </button>
                )}

                {/* Next */}
                {images.length > 1 && !isZoomed && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-zinc-900/80 p-2.5 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white sm:right-4 sm:p-3"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} className="sm:h-6 sm:w-6" />
                    </button>
                )}

                {/* Image container with zoom + pan */}
                <motion.div
                    ref={containerRef}
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative mx-2 my-16 h-[75vh] w-full max-w-5xl sm:mx-4 md:mx-12"
                    style={{
                        cursor: isZoomed ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                        touchAction: "none",
                    }}
                    onClick={handleClick}
                    onWheel={handleWheel}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                >
                    <div
                        style={{
                            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                            transition: isDragging ? "none" : "transform 0.2s ease-out",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                            fill
                            className="rounded-2xl object-contain select-none"
                            sizes="95vw"
                            priority
                            draggable={false}
                        />
                    </div>
                </motion.div>

                {/* Zoom hint (mobile) */}
                {!isZoomed && (
                    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-zinc-900/70 px-4 py-1.5 text-xs text-zinc-500 backdrop-blur-sm sm:hidden">
                        Double-tap or pinch to zoom
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
