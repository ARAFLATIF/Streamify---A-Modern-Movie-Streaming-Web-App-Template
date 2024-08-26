import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <FilmIcon className="w-6 h-6" />
          <span>Streamify</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            Browse
          </Link>
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            My List
          </Link>
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            Latest
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-2 rounded-full">
                <img
                  src="/placeholder.svg"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="hidden md:inline-flex">
            Subscribe
          </Button>
        </div>
      </header>
      <main className="flex-1 py-8">
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">Interstellar</h3>
                  <p className="text-sm line-clamp-2">
                    A team of explorers travel through a wormhole in space to find a suitable new home for humanity.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">The Dark Knight</h3>
                  <p className="text-sm line-clamp-2">
                    When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must
                    accept one of the greatest psychological and physical tests of his ability to fight injustice.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">Inception</h3>
                  <p className="text-sm line-clamp-2">
                    A thief who steals corporate secrets through the use of dream-sharing technology is given the
                    inverse task of planting an idea in the mind of a CEO.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">
                    The Lord of the Rings: The Fellowship of the Ring
                  </h3>
                  <p className="text-sm line-clamp-2">
                    A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save
                    Middle-earth from the Dark Lord Sauron.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Card>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-6 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Continue Watching</h2>
            <Link href="#" className="text-primary hover:text-primary-foreground/80" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">The Shawshank Redemption</h3>
                  <p className="text-sm line-clamp-2">
                    Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts
                    of common decency.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlayIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">The Godfather</h3>
                  <p className="text-sm line-clamp-2">
                    The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                    reluctant son.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlayIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">The Silence of the Lambs</h3>
                  <p className="text-sm line-clamp-2">
                    A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help
                    catch another serial killer, a madman who skins his victims.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlayIcon className="w-6 h-6" />
              </Button>
            </Card>
            <Card className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Movie Poster"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white space-y-1">
                  <h3 className="text-lg font-semibold line-clamp-1">The Shining</h3>
                  <p className="text-sm line-clamp-2">
                    A family heads to an isolated hotel for the winter where a sinister presence influences the father
                    into violence, while his psychic son sees horrific forebodings from both past and future.
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:bg-white/20">
                <PlayIcon className="w-6 h-6" />
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Streamify. All rights reserved.</div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary-foreground/80" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FilmIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
