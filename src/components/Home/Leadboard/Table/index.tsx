import { useState } from "react";
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { UserRow, columns } from "./TableConfig";
import Caption from "./Caption";

interface LeadboardTableProps {
  tableData: UserRow[];
  time_period: "week" | "all";
  setTime_period: React.Dispatch<React.SetStateAction<"week" | "all">>;
}

const LeadboardTable = ({
  tableData,
  time_period,
  setTime_period,
}: LeadboardTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer overflowX="auto" width="full">
      <Table borderColor={borderColor}>
        <Caption time_period={time_period} setTime_period={setTime_period} />
        <Thead bg="gray.700">
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr
              borderBottom="1px solid"
              borderColor={borderColor}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  p="10px"
                  borderColor={borderColor}
                  cursor="pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <Flex>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td
                  key={cell.id}
                  fontSize="sm"
                  minW="150px"
                  borderColor={borderColor}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LeadboardTable;
