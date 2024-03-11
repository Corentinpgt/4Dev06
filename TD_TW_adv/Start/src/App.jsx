import { cva } from "class-variance-authority";

// Base definition
const base = "text-white text-center mt-2"

const button = cva(base, {
  variants: {
    intent: {
      free: [
        "bg-green-700",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-green-800",
      ],
      sub: [
        "bg-yellow-600",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-yellow-700",
      ],
      rent: [
        "bg-red-500",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-red-700",
      ],
      simple: [

      ],
    },
    border : {
      none: [""],
      solid: ["border-2", "border-white"]
    }
    // size: {
    //   big: ["text-sm", "py-1", "px-2"],
    //   medium: ["text-base", "py-2", "px-4"],
    // },
  },
  // compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  // defaultVariants: {
  //   intent: "primary",
  //   size: "medium",
  // },
});

// function Button({ intent, size, className, ...rest }) {
//   return <button {...rest} className={button({ intent, size, className })} />;
// }

function Button({ intent, border, className, ...rest }) {
  return <button {...rest} className={button({ intent, border, className })} />;
}

export default function App() {
  return(
    <div className="grid h-screen place-content-center bg-black">
      <Button intent="rent" border="none">Explore Rentals</Button>
      <Button intent="sub" border="none">Explore Subscription</Button>
      <Button intent="free" border="solid">Explore Free</Button>
      <Button intent="simple" border="none">Explore Free</Button>
    </div>
  )
}
