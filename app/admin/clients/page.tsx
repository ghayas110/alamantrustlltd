import { getClients } from "@/app/actions/client";
import { Search, Building, User } from "lucide-react";
import AddClientModal from "./AddClientModal";

import ClientRowActions from "./ClientRowActions";

export default async function ClientsDashboard() {
  const clients = await getClients();

  return (
    <div className="!p-10 !max-w-7xl !mx-auto !w-full" style={{ fontFamily: 'sans-serif' }}>
      <div className="!flex !justify-between !items-end !mb-10 !m-0 !p-0">
        <div className="!m-0 !p-0 text-left">
          <h1 className="!text-[36px] !font-extrabold !text-[#18181B] !mb-2 !tracking-tight !m-0 !p-0 !leading-none" style={{ fontFamily: 'sans-serif' }}>Clients & CRM</h1>
          <p className="!text-[16px] !text-gray-500 !m-0 !p-0 !font-medium !mt-2">Manage your corporate relationships and asset portfolios.</p>
        </div>
        <div className="!m-0 !p-0">
          <AddClientModal />
        </div>
      </div>

      <div className="!bg-white !rounded-2xl !shadow-sm !border !border-gray-100 !overflow-hidden !m-0 !p-0">
        <div className="!px-6 !py-5 !border-b !border-gray-100 !bg-gray-50/50 !flex !gap-4 !m-0">
          <div className="!relative !flex-1 !max-w-md !m-0 !p-0 !flex !items-center">
            <Search className="!w-5 !h-5 !absolute !left-4 !text-gray-400 !z-10" />
            <input
              type="text"
              placeholder="Search clients by name or email..."
              className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!outline-none focus:!border-[#C5A473] focus:!ring-0 !bg-[#FFFFFF] !text-[14px]"
              style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', height: 'auto', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <table className="!w-full !text-left !border-collapse !m-0 !p-0">
          <thead>
            <tr className="!bg-gray-50 !text-[12px] !uppercase !tracking-wider !text-gray-500 !font-bold !border-b !border-gray-100 text-left">
              <th className="!px-6 !py-5 !font-bold !m-0 text-left">Client Name</th>
              <th className="!px-6 !py-5 !font-bold !m-0 text-left">Contact</th>
              <th className="!px-6 !py-5 !font-bold !m-0 text-left">Status</th>
              <th className="!px-6 !py-5 !font-bold !m-0 !text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="!divide-y !divide-gray-100">
            {clients.map((client: any) => (
              <tr key={client.id} className="hover:!bg-gray-50/50 !transition-colors !group text-left leading-normal">
                <td className="!px-6 !py-5 !m-0">
                  <div className="!flex !items-center !gap-4 !m-0 !p-0">
                    <div className="!w-12 !h-12 !rounded-full !bg-[#C5A473]/10 !text-[#C5A473] !flex !items-center !justify-center !font-bold !text-[18px]">
                      {(client.firstName?.charAt(0) || "U").toUpperCase()}
                    </div>
                    <div className="!m-0 !p-0">
                      <div className="!font-bold !text-[16px] !text-gray-900 !m-0 !p-0">{client.firstName} {client.lastName}</div>
                      <div className="!text-[13px] !text-gray-500 !flex !items-center !gap-1.5 !mt-1 !m-0 !p-0">
                        <User className="!w-3.5 !h-3.5" />
                        Client ID: #{client.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="!px-6 !py-5 !m-0">
                  <div className="!text-gray-900 !font-semibold !text-[15px] !m-0 !p-0">{client.email || 'N/A'}</div>
                  <div className="!text-[13px] !text-gray-500 !mt-1 !m-0 !p-0">{client.phone || 'No phone'}</div>
                </td>
                <td className="!px-6 !py-5 !m-0">
                  <span className="!inline-flex !items-center !px-3 !py-1 !rounded-full !text-[12px] !font-bold !bg-green-100 !text-green-800 !m-0">
                    Active
                  </span>
                </td>
                <td className="!px-6 !py-5 !text-right !m-0">
                  <ClientRowActions client={client} />
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={4} className="!px-6 !py-16 !text-center !text-gray-500 !m-0">
                  <Building className="!w-12 !h-12 !mx-auto !text-gray-300 !mb-4" />
                  <p className="!text-[18px] !font-bold !text-gray-900 !mb-2 !m-0">No clients found</p>
                  <p className="!text-[14px]">Get started by adding your first corporate client.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
