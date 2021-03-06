import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper} from './Card.styles'
import Heading from '../Heading'

const Card = ({container, title, children}) => (
  <Wrapper container={container}>
    {title && (
      <Heading as="h3" size="big">
        {title}
      </Heading>
    )}
    {children}
  </Wrapper>
)

Card.displayName = 'Card'

Card.propTypes = {
  /** Title to displayin the card */
  title: PropTypes.string,
  /** Content to be included in the card */
  children: PropTypes.node.isRequired
}

export default Card
