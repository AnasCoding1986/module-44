import PriceOption from "../PriceOption/PriceOption";

PriceOption


const PriceOptions = () => {
    
    const  prices = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to locker rooms"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to all gym areas including classes",
              "Free personal trainer session per month",
              "Access to sauna and steam room",
              "Discounts on merchandise"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
              "Access for two adults and two children",
              "Access to all gym areas including classes",
              "Discounts on family packages",
              "Free childcare services"
            ]
          }
        ]
      
      
    return (
        <div className="pt-12 grid grid-cols-3 gap-4">
            {
                prices.map((option,idx) => <PriceOption key={idx} option={option}></PriceOption>)
            }          
        </div>
    );
};

export default PriceOptions;