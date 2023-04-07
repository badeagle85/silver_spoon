import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-[50px] font-light leading-[50px]">강서구 공항대로 124 마곡엠벨리..</div>
      <div className="relative -ml-3 -mr-3 h-[100px] bg-[#d1bb9e]">
        <Image
          className="object-contain"
          src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a47bfcb8-63df-4be5-a60f-9434baa6da18.jpg"
          alt="배너"
          fill
        />
      </div>
      <div className="my-3">
        <span className="bg-highlighter font-bold">
          다른 분들이 많이 검색하고 있어요!
          {/* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #3df366 50%); */}
        </span>
        <div className="mt-3">
          <span className="ml-3 inline-flex items-center justify-center  rounded-full border border-slate-300 px-2 text-sm font-medium text-gray-800 ">
            1. 풀무원 콩나물
          </span>
          <span className="ml-3 inline-flex items-center justify-center rounded-full border border-slate-300 px-2 text-sm font-medium text-gray-800 hover:border-indigo-300 ">
            2. 대저 토마토
          </span>
          <span className="ml-3 inline-flex items-center justify-center rounded-full border border-slate-300 px-2 text-sm font-medium text-gray-800 ">
            3. 쭈꾸미
          </span>
          <span className="ml-3 inline-flex items-center justify-center rounded-full border border-slate-300 px-2 text-sm font-medium text-gray-800 ">
            4. 바질
          </span>
        </div>
      </div>

      <ul className="mt-5 grid grid-cols-5 justify-items-center gap-1">
        <li className="w-[50px] truncate">
          <div className="relative h-[50px] w-[50px]">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000049624681_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=89782ffc5b05216f3eba0258709389afc8249321"
            />
          </div>
          <div className="cmcate_brand_tx text-[12px]">친환경 자연주의</div>
        </li>
        <li className="w-[50px] truncate">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097001556337_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=be032b1bc686bc769feca9165b6a5623088328ff"
            />
          </div>
          <div className="cmcate_brand_tx text-[12px]">SSG FOOD MARKET</div>
        </li>
        <li data-react-unit-id="1010E01497">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097000931609_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=1077f2ef56d30a948a123f92b6fd14df6bb56306"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">웰팜</div>
        </li>
        <li data-react-unit-id="2011010450">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000032939608_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=731cb2dfc78df859b2895cc2112356d2d94c1107"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">PEACOCK</div>
        </li>
        <li data-react-unit-id="2011000384">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097000769974_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=add820e262b92211d649b49950a3719c3d68562e"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">테일러푸룬</div>
        </li>
        <li data-react-unit-id="1010E01499">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097001284766_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=b5b5c9fe609f52f035105cc5854163f4b382b92f"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">청오</div>
        </li>
        <li data-react-unit-id="3000017334">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000024588544_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=8350e0ff644b49e647df9b65f87c61468ab406dc"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">친환경</div>
        </li>
        <li data-react-unit-id="3000041012">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000042353008_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=82716d35d858a1590e031050c12819bcea7dc95f"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">과수원</div>
        </li>
        <li data-react-unit-id="3000035461">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097000841823_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=fec41f03e027fa5123039d65c97d189678cc9b9c"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">팜에이트</div>
        </li>
        <li data-react-unit-id="2000019350">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000040549449_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=979c6624abcd8744b63f24d97ba3dd9456aba80d"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">우리밀</div>
        </li>
        <li data-react-unit-id="2011013076">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097001084281_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=bf2854866628d5f3962212ad6d2ca4d19e16dfa2"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">범산목장</div>
        </li>
        <li data-react-unit-id="3000039051">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000043121875_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=1e3e2ab657a2d0043b07af08b2f317e45303e20c"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">푸드샵</div>
        </li>
        <li data-react-unit-id="3000021208">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            {' '}
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000025806568_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=92ca7878b92aafdb050846906e165f051d8ac75f"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">루솔</div>
        </li>
        <li data-react-unit-id="3000017364">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=2097000810300_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=33520c5652c52949529ab5c7ebc557b23a242085"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">설성목장</div>
        </li>
        <li data-react-unit-id="1010100108">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202008/2020082511572699253412666341_724.jpg&amp;w=200&amp;h=200&amp;edit=c&amp;t=9134d987afd86072401331e94277ea2cc8af3749"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">No Brand</div>
        </li>
        <li data-react-unit-id="3000049539">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000049565172_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=3c289be7ab2f2aa4ad8b773711b7304649f94f75"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">맛딜</div>
        </li>
        <li data-react-unit-id="3000032057">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000048963045_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=f44c1d92f266e55d1776dd8dcbe284b1adf3f0b5"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">고구마루</div>
        </li>
        <li data-react-unit-id="3000013796">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000033908339_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=927f30f45c7a1b5e006b8de1dff32d95a656af75"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]"> 헬스푸드</div>
        </li>
        <li data-react-unit-id="3000007659">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=1000524216463_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=5dd444ec8b0ef821f70a4f978c51a33f7176359d"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">오트리</div>
        </li>
        <li data-react-unit-id="1010E15429">
          <div className="relative h-[50px] w-[50px]" data-react-unit-id="3000045941">
            <Image
              className="cmcate_brand_thmb ssg_lazy rounded-lg"
              fill
              alt="11"
              src="https://simg.ssgcdn.com/trans.ssg?src=0000010731481_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=785c1795b6950e8f1cb246ef61c2c2e1da822e33"
            />
          </div>

          <div className="cmcate_brand_tx text-[12px]">맛있는풍경</div>
        </li>
      </ul>

      <div className="-ml-3 -mr-3 bg-gray-300 py-4">
        <p className="ml-2 font-bold">타이틀</p>
        <div className="flex overflow-x-scroll">
          <div className="flex-none px-3 py-1  last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-red-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-red-400 bg-white px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-orange-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-orange-400 bg-white px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-amber-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-amber-400 bg-white px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-lime-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-lime-400 bg-white px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-teal-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-teal-400 bg-white px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-sky-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-sky-400 bg-white  px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-3 py-1 first:pl-6 last:pr-6">
            <div className="w-[100px] text-center" role="alert">
              <div className="rounded-t-lg bg-violet-500 px-4 pt-2 font-bold text-white">홈플러스</div>
              <div className="rounded-b-lg border border-t-0 border-violet-400 bg-white  px-4 py-1 font-bold text-black">
                <p>오전 7시</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
