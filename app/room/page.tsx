import HeaderSection from '@/components/HeaderSection'
import Main from '@/components/Main'
import RoomSkeleton from '@/components/skeletons/RoomSkeleton'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Kamar & Harga',
}

const RoomPage = () => {
  return (
    <div>
      <HeaderSection title="Kamar & Harga" subTitle="Temukan kamar yang sesuai dengan kebutuhan Anda" />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  )
}

export default RoomPage