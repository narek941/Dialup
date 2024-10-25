import { AlertType } from 'components/shared/Alert/types';
import { FC, SVGProps } from 'react';

export interface IToggleAction {
  id: number;
  action: string;
  type?: AlertType;
  tooltipClasses?: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  handleSubmit: (id: number) => void;
}
