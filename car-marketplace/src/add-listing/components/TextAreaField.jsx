import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputChange, carInfo }) => {
  return (
    <div>
      <Textarea
        placeholder={item?.label}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        required={item?.required}
        defaultValue={carInfo?.[item.name]}
      />
    </div>
  );
};

export default TextAreaField;
