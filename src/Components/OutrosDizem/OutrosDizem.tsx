'use client'

import { DivContent, DivImage, SectionContainer, UserComment } from './styles'

export default function OutrosDizem() {
  return (
    <SectionContainer>
      <h2>Veja o que outros colaboradores dizem!</h2>
      <DivContent>
        <UserComment>
          <DivImage />
          <div>
            <h3>Levi Ciarrochi</h3>
            <span>****</span>
            <p>
              Que oportunidade incrível,Consigo ver o futuro dos Academy
              brilhando aqui.Vejo que tem muito como melhorar, mas está indo
            </p>
          </div>
        </UserComment>
      </DivContent>
    </SectionContainer>
  )
}
