import Image from "next/image";
import Link from "next/link";

type AuthorBioProps = {
  name?: string;
  imageSrc?: string;
  bio?: string;
  showDisclaimer?: boolean;
  aboutHref?: string;
  className?: string;
};

export default function AuthorBio({
  name = "Lynae Thomas",
  imageSrc = "/headshot-v2.png",
  bio = "I’m Lynae, the creator of SteadySpend and a software engineer learning personal finance the same way I learn code: by experimenting, making mistakes, and iterating. After navigating my own path through debt and rebuilding my financial foundation, I started sharing what actually worked for me. I’m here to provide the simple tools and judgment-free reflections I wish I’d had when I was first trying to feel calm and capable with my money.",
  showDisclaimer = true,
  aboutHref = "/about",
  className = "",
}: AuthorBioProps) {
  return (
    <section className={`mt-8 -mb-4 bg-transparent ${className}`}>
      <div className="container-4xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-6 lg:p-8 rounded-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              {/* Author Avatar */}
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={`${name} headshot`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Author Info */}
              <div className="flex-1">
                <p className="text-sm text-primary font-medium mb-1">Written & Reviewed By</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  <Link href={aboutHref} className="hover:text-primary transition-colors">
                    {name}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
              </div>
            </div>

            {/* Disclaimer */}
            {showDisclaimer && (
              <div className="text-xs text-muted-foreground bg-muted/50 p-4 rounded-lg">
                <strong className="text-foreground">Disclaimer:</strong> I am not a financial
                advisor. Content on SteadySpend is for educational and informational purposes based
                on my personal experiences. It is not professional financial advice, a promise of
                outcomes, or a substitute for a CPA or CFP. Please consult a qualified professional
                for guidance specific to your unique situation.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
