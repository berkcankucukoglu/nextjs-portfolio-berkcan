import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Social from "@/components/Social/Social";
import Photo from "@/components/Photo/Photo";
import Mission from "@/components/Mission/Mission";
import { USER_INFO } from "@/constants";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:pt-8 lg:pb-24">
          {/* Text Area */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="bg-gradient-to-r from-accent to-stone-400 bg-clip-text text-xl tracking-tight text-transparent">{USER_INFO.title}</span>
            <h1 className="h1 mb-6 text-stone-300">
              {USER_INFO.name + ' ' + USER_INFO.surname}
            </h1>
            <p className="max-w-lg mb-9">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iste eum quia ea quibusdam in veritatis voluptate corporis excepturi, recusandae repellat quisquam, quam accusamus dolor ipsum nobis temporibus aut quae minus hic, officiis aspernatur. Repellendus, maiores fuga, deleniti placeat ullam magni saepe culpa ea nam ipsum aspernatur. Reiciendis, nihil assumenda?</p>
            {/* Btns/Links */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline_transparent" size="lg" className="flex items-center gap-2 uppercase">
                <span className="text-lg">Download Resume</span>
                <FontAwesomeIcon icon={faDownload} className="w-auto h-6 text-lg" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* Photo Area */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full">
        <Mission />
      </div>
    </section>
  )
}

export default Home