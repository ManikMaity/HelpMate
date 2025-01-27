"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { testimonialsData } from "@/config/dataConfig"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

function Testimonials() {

    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
      )

  return (
    <Carousel
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {testimonialsData.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <p className="text-muted-foreground">
                    &quot;{testimonial.feedback}&quot;
                  </p>

                  <div className="flex items-center mt-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.photoUrl}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-xs">
                    <p className="font-bold text-sm">{testimonial.name}</p> 
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                  </div>
                  
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Testimonials
