import Phone1 from "../../assets/phone1.png";
import Phone2 from "../../assets/phone2.png";
import Phone3 from "../../assets/phone3.png";
import { Button } from "../../components/Button";

export const Service = () => {
  return (
    <section className="my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 mx-auto">
        <h3 className="text-lg font-semibold text-primary mb-4">Service</h3>
        <h2 className="text-4xl font-bold mb-4 capitalize lg:w-1/2">
          we provide the best service
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:w-2/3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tenetur culpa doloremque facere quia quaerat enim dolores voluptas
          unde facilis. Deserunt quisquam molestias architecto impedit, facilis
          minus accusamus quia facere, quam, molestiae earum provident incidunt
          non excepturi veritatis rerum nulla.
        </p>
        <Button text="More Info" />
      </div>

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center gap-1">
        <div>
          <img src={Phone1} />
          <img src={Phone2} className="mt-1" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={Phone3} alt="" className="w-full md:h-[291px]" />
        </div>
      </div>
    </section>
  );
};
