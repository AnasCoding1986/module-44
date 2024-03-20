import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const {name, price, features} = option;
    console.log(option);
    return (
        <div className="bg-amber-200 p-7 rounded-xl flex flex-col">
           <h2><span>{price}</span>
           <span> USD /mon</span></h2>
           <p>
            {name}
           </p>
           <p className="flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </p>
           <button className="bg-green-400 px-9 py-2 mt-2 w-full rounded-2xl">Buy Now</button>
        </div>
    );
};

export default PriceOption;