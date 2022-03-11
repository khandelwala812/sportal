import React, { FC } from "react"

import Calendar from "../../components/Calendar"
import PageLayout from "../../layouts/PageLayout"

const PlatformAdminPage: FC = () => {
  return (
    <PageLayout title="Platform Admin">
      <Calendar weeks={[]} />
    </PageLayout>
  )
}

export default PlatformAdminPage
