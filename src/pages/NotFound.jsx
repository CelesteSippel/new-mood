// import React from 'react'
// import { slide as Menu } from 'react-burger-menu'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'

// import { colors } from '../utils/theme'

// const styles = {
//   bmBurgerButton: {
//     position: 'fixed',
//     width: '36px',
//     height: '30px',
//     right: '36px',
//     top: '36px',
//   },
//   bmBurgerBars: {
//     background: colors.dark,
//   },
//   bmBurgerBarsHover: {
//     background: '#a90000',
//   },
//   bmCrossButton: {
//     height: '24px',
//     width: '24px',
//   },
//   bmCross: {
//     background: '#bdc3c7',
//   },
//   bmMenuWrap: {
//     position: 'fixed',
//     height: '100%',
//   },
//   bmMenu: {
//     background: colors.dark,
//     padding: '2.5em 1.5em 0',
//     fontSize: '1.15em',
//   },
//   bmMorphShape: {
//     fill: colors.dark,
//   },
//   bmItemList: {
//     color: '#b8b7ad',
//     padding: '0.8em',
//   },
//   bmItem: {
//     display: 'inline-block',
//   },
//   bmOverlay: {
//     background: 'rgba(0, 0, 0, 0.3)',
//   },
// }

// const Container = styled.div`
//   @media (min-width: 500px) {
//     display: none;
//   }
// `

// const LinksContainer = styled.div`
//   display: flex !important;
//   flex-direction: column;
//   padding-top: 30px;
// `

// const HamburgerNav = () => {
//   return (
//     <Container>
//       <Menu width="65%" noOverlay styles={styles} right>
//         <LinksContainer>
//           <NavLink
//             to="/"
//             className="nav-link"
//             activeStyle={{ color: '#fff' }}
//             exact={true}
//           >
//             Home
//           </NavLink>
//           <NavLink to="/1" className="nav-link" activeStyle={{ color: '#fff' }}>
//             Page 1
//           </NavLink>
//           <NavLink to="/2" className="nav-link" activeStyle={{ color: '#fff' }}>
//             Page 2
//           </NavLink>
//         </LinksContainer>
//       </Menu>
//     </Container>
//   )
// }

// export default HamburgerNav
