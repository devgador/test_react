
const OpenLink = ({ redirectUrl, logoImage, altValue }) => {
    return (
        <>
            <a href={redirectUrl} target="_blank">
                <img src={logoImage} className="logo" alt={`${altValue} logo`} />
            </a>

        </>
    );
}

export default OpenLink;