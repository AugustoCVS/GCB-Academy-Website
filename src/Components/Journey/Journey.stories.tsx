import { Meta, StoryObj } from "@storybook/react";
import Journey  from "./Journey";

import BackEndImg from '../../assets/BackendDeveloper.jpeg'
import WebDevImg from '../../assets/WebDeveloper.jpeg'
import MobileDevImg from '../../assets/Celular.svg'
import QAImg from '../../assets/QA.svg'
import { ICardJourneyProps } from "./components/CardJourney";

export default {
    title: 'Components/Journey',
    component: Journey
}as Meta

const itemsCards: ICardJourneyProps[] = [
    {
      id: 1,
      bgcolor: '#00D173',
      img: WebDevImg,
      title: 'Web Developer',
      text: '21 sugestões',
      stars: '*****',
      journeyType: 'WebDeveloper',
    },
    {
      id: 2,
      bgcolor: '#FFAC52',
      img: MobileDevImg,
      title: 'Mobile Developer',
      text: '41 sugestões',
      stars: '*****',
      journeyType: 'MobileDeveloper',
    },
    {
      id: 3,
      bgcolor: '#0097FE',
      img: BackEndImg,
      title: 'Backend Developer',
      text: '21 sugestões',
      stars: '****',
      journeyType: 'BackendDeveloper',
    },
    {
      id: 4,
      bgcolor: '#68D4AE',
      img: QAImg,
      title: 'Quality Assurance',
      text: '10 sugestões',
      stars: '***',
      journeyType: 'QualityAssurance',
    },
  ]

export const Default: StoryObj={}