type CompanyCardProps = {
    company: string;
    image: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({image, company}) => {
    return (
        <div className="w-full flex items-center">
            <img src={image} className="w-10" />
            <p>{company}</p>
        </div>
    )
}

export default CompanyCard;