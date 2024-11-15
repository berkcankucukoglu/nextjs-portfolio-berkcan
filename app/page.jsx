"use client"
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Social from "@/components/Social/Social";
import Photo from "@/components/Photo/Photo";
import Mission from "@/components/Mission/Mission";
import { USER_INFO, HERO_CONTENT } from "@/constants";

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
            <p
              className="my-4 max-w-lg leading-relaxed"
            >
              {HERO_CONTENT[0].text}
            </p>
            <p
              className="mb-4 max-w-lg leading-relaxed hidden md:block"
            >
              {HERO_CONTENT[1].text}
            </p>
            {/* Btns/Links */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mt-9 sm:mb-8 lg:mb-0">
              <Button
                variant="outline_transparent"
                size="lg"
                className="flex items-center gap-2 uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  const confirmDownload = window.confirm(
                    'PDF Format – Download Resume ?'
                  );
                  if (confirmDownload) {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = '/berkcan_kucukoglu_resume.pdf';
                    downloadLink.setAttribute('download', 'berkcan_kucukoglu_resume.pdf');
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                  }
                }}>
                <span className="text-lg">Download Resume</span>
                <FontAwesomeIcon icon={faDownload} className="w-auto h-6 text-lg" />
              </Button>
              <div className="mb-8 sm:mb-0">
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