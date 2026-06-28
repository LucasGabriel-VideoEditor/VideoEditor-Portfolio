export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl gradient-purple grid place-items-center font-bold text-white">
            LG
          </div>
          <div>
            <div className="text-sm font-semibold">Lucas Gabriel</div>
            <div className="text-xs text-muted-foreground">
              Freelance YouTube Video Editor
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          © 2026 Lucas Gabriel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
