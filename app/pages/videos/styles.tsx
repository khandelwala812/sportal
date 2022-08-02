import styled from "styled-components/native"
import Button from "../../components/Button"
import Container from "../../components/Container"
import CloseButton from "../../components/CloseButton"
import FormField from "../../components/FormField"
import PageLayout from "../../layouts/PageLayout"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"

import colors from "../../config/colors"
import SilhouetteLayout from "../../layouts/SilhouetteLayout"

export const Title = styled(Text)`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 400;
`

export const VideosPageLayout = styled(SilhouetteLayout)`
  /* justify-content: center;
  align-items: center; */
  flex-direction: row;
  padding-top: 100px;
`

export const EventWrapper = styled.View`
  background: ${colors.foreground};
  width: 320px;
  height: 220px;
  // justify-content: center;
  // align-items: center;
  margin: 30px;
  border-radius: 10px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ContentWrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 2px;
`

export const EventTitle = styled(Text)`
  align-self: center;
  font-size: 24px;
  margin-top: 4px;
  margin-bottom: 10px;
  color: ${colors.link};
`

export const Cross = styled(CloseButton)`
  position: absolute;
  top: 2px;
  right: 2px;
`

export const UploadVideoWrapper = styled(Container)`
  width: 400px;
  align-items: flex-start;
  align-self: center;
  gap: 4px;
  padding: 16px 16px;
  margin: 20px;
  border-radius: 8px;
`

export const TitleField = styled(FormField)`
  background-color: none;
  width: 350px;
  height: 30px;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  border: 1px;
  border-radius: 5;
  border-color: ${colors.light};
  // border-bottom: 1px solid ${colors.black};

  &:focus {
    border: none;
    outline: none;
  }
`

export const SelectVideoButton = styled(Button)`
  margin: 0;
  font-size: 12px;
  border-radius: 15px;
`

export const ViewsText = styled(Text)`
  font-size: 16px;
  margin: 0;
`

export const InteractionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ViewsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const LikesText = styled(Text)`
  font-size: 16px;
  margin: 0;
`

export const LikesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const UploadWrapper = styled(Row)`
  gap: 8px;
`

export const UploadButton = styled(SubmitButton)`
  margin: 0;
  margin-top: 8px;
  margin-right: 8px;
  border-radius: 15px;
`

export const ProgressText = styled(Text)`
  margin-left: 4px;
  font-size: 14px;
`
