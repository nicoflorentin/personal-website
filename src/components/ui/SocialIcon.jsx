const SocialIcon = ({ children, href }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-colors">
            {children}
        </a>
    )
}

export default SocialIcon
