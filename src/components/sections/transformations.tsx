"use client";

import { useRef, useState } from "react";

const pendingRecords = [
  { id: "member-one", label: "Member story 01", split: 54 },
  { id: "member-two", label: "Member story 02", split: 48 },
  { id: "member-three", label: "Member story 03", split: 59 },
];

function PendingComparison({ label, split: initialSplit }: (typeof pendingRecords)[number]) {
  const [split, setSplit] = useState(initialSplit);

  return (
    <article className="comparison-card" aria-label={`${label}: photography pending`}>
      <div className="comparison-card__base">
        <span className="comparison-card__label">Before</span>
        <span className="comparison-card__status">Member photography pending</span>
      </div>
      <div className="comparison-card__after" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }} aria-hidden="true">
        <span className="comparison-card__label">After</span>
        <span className="comparison-card__status">Member photography pending</span>
      </div>
      <div className="comparison-card__divider" style={{ left: `${split}%` }} aria-hidden="true">
        <span />
      </div>
      <label className="sr-only" htmlFor={label}>
        Compare before and after placeholder for {label}
      </label>
      <input
        className="comparison-card__range"
        id={label}
        type="range"
        min="8"
        max="92"
        value={split}
        onChange={(event) => setSplit(Number(event.target.value))}
      />
      <p className="comparison-card__caption">{label}</p>
    </article>
  );
}

export function Transformations() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ x: number; scrollLeft: number } | null>(null);

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointer.current = { x: event.clientX, scrollLeft: galleryRef.current?.scrollLeft ?? 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const drag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointer.current || !galleryRef.current) return;
    galleryRef.current.scrollLeft = pointer.current.scrollLeft - (event.clientX - pointer.current.x);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    pointer.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="transformations section-light" id="transformations" aria-labelledby="transformations-title">
      <div className="page-shell transformations__top">
        <p className="section-label reveal" data-scroll>
          The proof is personal
        </p>
        <h2 className="display-heading reveal reveal--up" data-scroll id="transformations-title">
          Real people.
          <br />
          <em>Real results.</em>
        </h2>
        <p className="transformations__note reveal reveal--up" data-scroll>
          Transformation photography is being collected with member consent. These are intentionally marked placeholders—no results are invented here.
        </p>
      </div>

      <div
        className="transformations__gallery"
        ref={galleryRef}
        role="region"
        aria-label="Transformation gallery"
        tabIndex={0}
        onPointerDown={beginDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="transformations__rail">
          {pendingRecords.map((record) => (
            <PendingComparison key={record.id} {...record} />
          ))}
          <div className="gallery-end" aria-hidden="true">
            <span>Drag to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
