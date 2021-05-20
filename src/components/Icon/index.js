import React from 'react'
import Back from '~/assets/icons/back.svg'
import Chat from '~/assets/icons/chat.svg'
import Home from '~/assets/icons/home.svg'
import { SvgCssUri } from 'react-native-svg'

function Icon({ size, color, name }) {
  switch (name) {
    case 'ambulance':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/ambulance.svg'
        />
      )
      break
    case 'back':
      return <Back fill={color} width={size} height={size} />
      break
      case 'chat':
      return <Chat fill={color} width={size} height={size} />
      break
    case 'filter':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/filter-results-button.svg'
        />
      )
      break
    case 'flask':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/flask.svg'
        />
      )
      break
    case 'heart':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg'
        />
      )
      break
    case 'home':
      return <Home fill={color} width={size} height={size} />
      break
    case 'medicine':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/medicine.svg'
        />
      )
      break
    case 'menu':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/menu.svg'
        />
      )
      break
    case 'notification':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/notification.svg'
        />
      )
      break
    case 'nurse':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/nurse.svg'
        />
      )
      break
    case 'patient':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/patient.svg'
        />
      )
      break
    case 'pimples':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/pimples.svg'
        />
      )
      break
    case 'stethoscope':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/stethoscope.svg'
        />
      )
      break
    case 'tooth':
      return (
        <SvgCssUri
          width={`${size}px`}
          height={`${size}px`}
          fill={color}
          uri='https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/tooth.svg'
        />
      )
      break
    default:
      return null
  }
}

export default Icon
