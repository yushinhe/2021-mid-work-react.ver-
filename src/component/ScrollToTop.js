import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { gsap } from "gsap"

class ScrollToTop extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            const tl = gsap.timeline({ default: { ease: "power1.out" } })
            tl.to('.page-transform li', { duration: .5, y: 0, opacity: 1, transformOrigin: "bottom left", stagger: .2 })
            tl.to('.page-transform li', { duration: .5, yPercent: "100", opacity: 1, transformOrigin: "bottom left", stagger: .2 })
        }
    }

    render() {
        return (
            this.props.children
        );
    }
}

export default withRouter(ScrollToTop);