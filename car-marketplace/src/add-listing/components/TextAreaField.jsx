import { Textarea } from "@/components/ui/textarea"

const TextAreaField = (item) => {
  return (
    <div>
      <Textarea placeholder={item?.label} />
    </div>
  )
}

export default TextAreaField
