export function AcademicMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? "gap-3" : "gap-4"}`}>
      <div
        className={`${compact ? "size-10" : "size-12"} grid shrink-0 place-items-center rounded-full border border-current/30`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className={compact ? "size-7" : "size-8"} fill="none">
          <path d="M24 4.5 40 11v12.2c0 9.4-6.4 16.4-16 20.3-9.6-3.9-16-10.9-16-20.3V11l16-6.5Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="m15.5 20.5 8.5-4 8.5 4-8.5 4-8.5-4Z" fill="currentColor" />
          <path d="M18.5 23.1v5.2c3.5 2.6 7.5 2.6 11 0v-5.2M14 34h20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div>
        <p className={`${compact ? "text-base" : "text-lg"} font-serif leading-none tracking-[0.01em]`}>
          Psychométriques
        </p>
        <p className={`${compact ? "mt-1 text-[0.5rem] tracking-[0.2em]" : "mt-1.5 text-[0.6rem] tracking-[0.24em]"} font-semibold uppercase opacity-60`}>
          Préparation psychométriques
        </p>
      </div>
    </div>
  );
}
