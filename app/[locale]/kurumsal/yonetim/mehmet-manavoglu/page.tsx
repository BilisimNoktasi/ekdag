import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yöetim | Mehmet Manavoğlu",
  description: "Ekdağ Yönetim Kurulu Başkanı",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <img src="/images/yonetim/mehmet-manavoglu.jpg" />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3>Yönetim Kurulu Başkanı</h3>
                <h1>MEHMET MANAVOĞLU</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  1976 tarihinde Korkuteli{`'`} nde doğan Mehmet Manavoğlu,
                  ilköğretim, ortaöğretim ve lise eğitimlerini Korkuteli{`'`} nde
                  tamamladı. Korkuteli ilçesinin köklü ve soylu ailelerinden
                  olan Manavoğlu genç yaşlarında aile mesleği olan tarım ve
                  ticaret ile uğraşmaya başlayarak marka tescili ilçemize ait
                  olan elma ve armut yetiştiriciliği yaptı. Manavoğlu yoğun
                  geçen bu dönemleri içinde STK{`'`} larda, partilerde, kamu - kurum
                  ve kuruluşlarında da aktif rol oynayarak siyasi hayatına yön
                  verdi.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Bu çerçevede Korkuteli sanayi sitesinde yönetim kurulu
                  üyeleği, Korkuteli sulama birliğinde delege, Korkuteli
                  Belediye{`'`} sinde meclis kâtip üyeliği, meclis üyeliği, imar
                  komisyon başkanlığı, belediye başkan yardımcılığı, Antalya
                  Büyükşehir Belediyesi{`'`} nde meclis üyeliği, Akdeniz Belediyeler
                  Birliği{`'`} nde genel kurul üyeliği gibi birçok alanda aktif
                  olarak rol aldı. 1 Haziran 2019{`'`} dan-17 Mayıs 2024 yılına kadar
                  Antalya Büyükşehir Belediyesi Sosyal A.Ş{`'`} de yönetim kurulu
                  üyeliği yaptı.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Yoğun geçen siyasi ve iş hayatının tek gayesi Allah{`'`} ın
                  rızasını kazanmak ve sevdası olan Antalya{`'`} ya ve Korkuteline
                  hizmet etmek olan Mehmet Manavoğlu, inandığı şiar ile birçok
                  önemli projeye ve fikire de yön verdi.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Son olarak ise 2024 mahalli idareler seçimleri sonucunda
                  Antalya Büyükşehir Belediye Başkanlığına ikinci dönem seçilen
                  sayın Muhittin Böcek{`'`} in tensipleri ile Büyükşehir{`'`} in en büyük
                  şirketlerinden birisi olan Ekdağ A.Ş.{`'`} nin yönetim kurulu
                  başkanı olarak görevlendirildi. Hâlâ da bu görevi devam
                  ettiren Manavoğlu evli ve 3 çocuk babasıdır.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
