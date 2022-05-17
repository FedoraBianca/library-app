import CustomButton from "../CustomButton";

export interface IActionEnhancerProps {
  item:  Record<string, any>;
  action: (data: any) => void;
  actionName: string;
  className?: string;
}

const ActionEnhancer: React.FC<IActionEnhancerProps> =({
  item,
  action,
  actionName,
  className=''
}) => {

  const handleAction = (item: Record<string, any>) => () => {
    action(item);
  };

  return (
    <div className={`w-100 ${className}`}>
      <CustomButton variant='secondary' onClick={handleAction(item)}>{actionName}</CustomButton>
    </div>
  )
};

export default ActionEnhancer;