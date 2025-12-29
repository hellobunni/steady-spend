import Link from 'next/link'
import Image from 'next/image'
import { Award, Briefcase, GraduationCap } from 'lucide-react'

type Credential = {
  icon: typeof GraduationCap
  label: string
}

type AuthorBioProps = {
  name?: string
  initials?: string
  imageSrc?: string
  bio?: string
  credentials?: Credential[]
  showDisclaimer?: boolean
  showLearnMore?: boolean
  aboutHref?: string
  className?: string
}

const defaultCredentials: Credential[] = [
  {
    icon: GraduationCap,
    label: "B.S. in Finance",
  },
  {
    icon: Award,
    label: "Certified Financial Educator",
  },
  {
    icon: Briefcase,
    label: "10+ Years Experience",
  },
]

export default function AuthorBio({
  name = "Lynae Thomas",
  initials = "LT",
  imageSrc = "/headshot.jpeg",
  bio = "Personal finance educator and creator of SteadySpend. After paying off $28,000 in debt and building financial stability, I now help everyday people take control of their money through practical, judgment-free guidance.",
  credentials = defaultCredentials,
  showDisclaimer = true,
  showLearnMore = true,
  aboutHref = "/about",
  className = "",
}: AuthorBioProps) {
  return (
    <section className={`py-12 lg:py-18  bg-transparent ${className}`}>
      <div className="container-4xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 lg:p-10 rounded-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              {/* Author Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {bio}
                </p>
              </div>
            </div>



            {/* Disclaimer */}
            {showDisclaimer && (
              <div className="text-xs text-muted-foreground bg-muted/50 p-4 rounded-lg">
                <strong className="text-foreground">Disclaimer:</strong> This tool is for educational purposes only and should not be considered professional financial advice. Always consult with a qualified professional for advice specific to your situation.
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

