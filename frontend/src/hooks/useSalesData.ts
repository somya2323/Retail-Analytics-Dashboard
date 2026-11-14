
import { useCallback, useEffect, useState } from "react";
import { fetchSales } from "../services/api";
import type { SalesParams } from "../services/api";
import useDebouncedValue from "./useDebouncedValue";

export type FilterState = {
  region: string;
  gender: string;
  ageMin: string;
  ageMax: string;
  category: string;
  tags: string;
  paymentMethod: string;
  dateFrom: string;
  dateTo: string;
};

export type SalesSummary = {
  totalRevenue: number;
  totalOrders: number;
  totalUnits: number;
  averageOrderValue: number;
};

export type SalesRow = {
  TransactionID?: string;
  transactionId?: string;
  Date?: string;
  CustomerID?: string;
  customerId?: string;
  CustomerName?: string;
  PhoneNumber?: string;
  Gender?: string;
  Age?: string | number;
  ProductCategory?: string;
  Quantity?: string | number;
  TotalAmount?: number;
  CustomerRegion?: string;
  Region?: string;
  ProductID?: string;
  productId?: string;
  EmployeeName?: string;
  employeeName?: string;
};

type PageInfo = {
  totalFiltered?: number;
  pageSize?: number;
};

type SalesResponse = {
  items?: SalesRow[];
  summary?: SalesSummary;
  pageInfo?: PageInfo;
};

const emptySummary: SalesSummary = {
  totalRevenue: 0,
  totalOrders: 0,
  totalUnits: 0,
  averageOrderValue: 0,
};

export default function useSalesData() {
  const [search, setSearch] = useState<string>("");

  const [filters, setFilters] = useState<FilterState>({
    region: "",
    gender: "",
    ageMin: "",
    ageMax: "",
    category: "",
    tags: "",
    paymentMethod: "",
    dateFrom: "",
    dateTo: "",
  });

  const [sortBy, setSortBy] = useState<string>("Date");
  const [sortOrder, setSortOrder] = useState<string>("desc");
  const [page, setPage] = useState<number>(1);

  const [data, setData] = useState<SalesRow[]>([]);
  const [summary, setSummary] = useState<SalesSummary>(emptySummary);
  const [pageInfo, setPageInfo] = useState<PageInfo>({});
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearch = useDebouncedValue(search, 600);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, filters, sortBy, sortOrder]);

  const loadData = useCallback(async () => {
    if (debouncedSearch && debouncedSearch.length < 3) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const params: SalesParams = {
        search: debouncedSearch,
        ...filters,
        sortBy,
        sortOrder,
        page,
        pageSize: 10,
      };

      const res = (await fetchSales(params)) as SalesResponse;

      setData(res.items ?? []);
      setSummary(res.summary ?? emptySummary);
      setPageInfo(res.pageInfo ?? {});
    } catch (error) {
      console.error("Error fetching sales:", error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, filters, sortBy, sortOrder, page]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    search,
    setSearch,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    page,
    setPage,
    data,
    summary,
    pageInfo,
    loading,
  };
}
