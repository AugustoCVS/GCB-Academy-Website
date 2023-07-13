import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import {
  SectionContainer,
  UserComment,
  DivImage,
  DivContent,
  DivUserComment,
} from './styles'
import UserImage from '../../assets/Celular.svg'

export default function OutrosDizem() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
  })

  return (
    <SectionContainer ref={sliderRef} className="keen-slider">
      <h2>Veja o que outros colaboradores dizem!</h2>
      <DivContent>
        <DivUserComment className="keen-slider__slide">
          <UserComment>
            <DivImage>
              <Image
                src={UserImage}
                alt="Imagem do usuário"
                layout="fill"
                objectFit="cover"
              />
            </DivImage>
            <div>
              <h3>Levi Ciarrochi</h3>
              <span>****</span>
              <p>
                Que oportunidade incrível! Consigo ver um futuro brilhante aqui
                no GCB Academy. Ainda há muito a melhorar, mas estamos no
                caminho certo.
              </p>
            </div>
          </UserComment>
        </DivUserComment>
        <DivUserComment className="keen-slider__slide">
          <UserComment>
            <DivImage>
              <Image
                src={UserImage}
                alt="Imagem do usuário"
                layout="fill"
                objectFit="cover"
              />
            </DivImage>
            <div>
              <h3>Gustavo Wuelta</h3>
              <span>**</span>
              <p>Alcancei um potencial absurdo graças ao GCB Academy.</p>
            </div>
          </UserComment>
        </DivUserComment>

        <DivUserComment className="keen-slider__slide">
          <UserComment>
            <DivImage>
              <Image
                src={UserImage}
                alt="Imagem do usuário"
                layout="fill"
                objectFit="cover"
              />
            </DivImage>
            <div>
              <h3>Rogério Coelho</h3>
              <span>****</span>
              <p>Transforme seu futuro no GCB Academy.</p>
            </div>
          </UserComment>
        </DivUserComment>
      </DivContent>
    </SectionContainer>
  )
}
