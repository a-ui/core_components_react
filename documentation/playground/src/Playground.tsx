import AvatarExamples from './atoms/AvatarExamples';
import BadgeExamples from './atoms/BadgeExamples';
import BreadcrumbExamples from './atoms/BreadcrumExamples';
import ButtonExamples from './atoms/ButtonExamples';
import ButtonGroupExamples from './molecules/ButtonGroupExamples';
import CheckboxExamples from './atoms/CheckboxExamples';
import IconExamples from './base/IconExamples';
import ImageExamples from './molecules/ImageExamples';
import LabelExamples from './atoms/LabelExamples';
import PageIndicatorExamples from './molecules/PageIndicatorExamples';
import ProgressBarExamples from './atoms/ProgressBarExamples';
import RadioExamples from './atoms/RadioExamples';
import SpinnerExamples from './atoms/SpinnerExamples';
import SwitchExamples from './atoms/SwitchExamples';
import TableExamples from './atoms/TableExamples';
import TagExamples from './molecules/TagExamples';
import TextAreaExamples from './atoms/TextAreaExamples';
import TextFieldExamples from './atoms/TextFieldExamples';
import ToggleExamples from './atoms/ToggleExamples';
import TooltipExamples from './atoms/TooltipExamples';
import AccordionExamples from './molecules/AccordionExamples';
import CardExamples from './molecules/CardExamples';
import AlertExamples from './molecules/AlertExamples';
import FooterExamples from './organisms/FooterExamples';
import TagListExamples from './organisms/TagListExamples';
import PaginationExamples from './molecules/PaginationExamples';
import FlyoutExamples from './molecules/FlyoutExamples';
import UploadExamples from './molecules/UploadExamples';
import ModalExamples from './molecules/ModalExamples';
import StepIndicatorExamples from './molecules/StepIndicatorExamples';
import NavigationListExamples from './molecules/NavigationListExamples';
import HeaderExamples from './organisms/HeaderExamples';
import ListExamples from './atoms/ListExamples';
import RangeSliderExamples from './atoms/RangeSliderExamples';
import AutocompleteExamples from './molecules/AutocompleteExamples';
import DatepickerExamples from './molecules/DatepickerExamples';
import SelectExamples from './atoms/SelectExamples';

export function Playground() {
  return (
    <>
      <h1>Atoms</h1>
      <IconExamples />
      <AvatarExamples />
      <BadgeExamples />
      <BreadcrumbExamples />
      <ButtonExamples />
      <CheckboxExamples />
      <LabelExamples />
      <ListExamples />
      <PageIndicatorExamples />
      <ProgressBarExamples />
      <RadioExamples />
      <RangeSliderExamples />
      <SelectExamples />
      <SpinnerExamples />
      <SwitchExamples />
      <TableExamples />
      <TextAreaExamples />
      <TextFieldExamples />
      <ToggleExamples />
      <TooltipExamples />
      <h1>Molecules</h1>
      <AutocompleteExamples />
      <AccordionExamples />
      <AlertExamples />
      <ButtonGroupExamples />
      <CardExamples />
      <DatepickerExamples />
      <FlyoutExamples />
      <ImageExamples />
      <ModalExamples />
      <NavigationListExamples />
      <PaginationExamples />
      <StepIndicatorExamples />
      <TagExamples />
      <UploadExamples />
      <h1>Organisms</h1>
      <TagListExamples />
      <FooterExamples />
      <HeaderExamples />
    </>
  );
}

export default Playground;
