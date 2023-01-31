// Interface for our props.
interface NavButtonProps {
  text: string;
  name?: string;
  age?: number;
  city?: string;
  variant: "primary" | "secondary"; // Enums to props
}

export default function NavButton({
  text,
  name,
  age,
  city = "Lyngby", // Adding default values to props
  variant,
}: NavButtonProps) {
  const lastName: string = "Mathias";

  return <div>{text}</div>;
}
