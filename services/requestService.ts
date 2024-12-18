export const getRequest = async (requestParam: RequestParameter) => {
    const queryParams = buildQueryParams(requestParam);
  
    // Strapi API'sine istek URL'si
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/${requestParam.controller}?${queryParams}`;
  
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
  
    return await response.json();
  };
  
  // URL sorgu parametrelerini düzgün şekilde ekleyen fonksiyon
  const buildQueryParams = (params: RequestParameter): string => {
    const query = new URLSearchParams();
  
    // `filters` parametresi varsa ve slug filtresi varsa, slug'ı sorguya ekleyelim
    if (params.filters?.slug) {
      query.append("filters[slug][$eq]", params.filters.slug);
      // Slug'ı filtrelerden çıkartıyoruz çünkü URL'de filtre olarak ekledik
      delete params.filters.slug;
    }
  
    // Diğer parametreleri ekleyelim
    if (params.pagination?.page) query.append("pagination[page]", params.pagination.page.toString());
    if (params.pagination?.pageSize) query.append("pagination[pageSize]", params.pagination.pageSize.toString());
    if (params.sort) query.append("sort", params.sort.join(","));
    if (params.populate) query.append("populate", Array.isArray(params.populate) ? params.populate.join(",") : params.populate);
    if (params.locale) query.append("locale", params.locale);
    if (params.fields) query.append("fields", params.fields.join(","));
    console.log(params.sort)
    return query.toString();
  };
  
  // Tip tanımlamaları
  type RequestParameter = {
    controller: string; // Strapi API endpoint, örn: "articles"
    filters?: Record<string, any>; // Filtreleme parametreleri, undefined olabilir
    pagination?: {
      page?: number; // Sayfa numarası
      pageSize?: number; // Sayfa başına kayıt sayısı
    };
    sort?: string[]; // Sıralama kriterleri, örn: ["title:asc"]
    populate?: string | string[]; // İlişkili verileri doldurma
    locale?: string; // Dil, örn: "en" veya "tr"
    fields?: string[]; // Çekilecek alanlar, örn: ["title", "description"]
  };