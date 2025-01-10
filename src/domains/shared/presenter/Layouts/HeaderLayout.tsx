import { Link } from '@tanstack/react-router'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/domains/shared/presenter/components/ui/breadcrumb'
import { Separator } from '@/domains/shared/presenter/components/ui/separator'
import { SidebarTrigger } from '@/domains/shared/presenter/components/ui/sidebar'

export function HeaderLayout({ breadcrumbItemList, children } : { breadcrumbItemList : { link?: string, label: string, hiddenIfMd: boolean }[], children: ReactNode }) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItemList.map((item, i) => {
                const isLast = breadcrumbItemList.length === i+1
                if (item.link) {
                  return (
                    <div key={`breadcrumb-${i}`} className="flex items-center gap-1.5">
                      <BreadcrumbLink className={item.hiddenIfMd ? 'hidden md:block' : ''} asChild>
                        <Link to={item.link}>{item.label}</Link>
                      </BreadcrumbLink>
                      { !isLast && <BreadcrumbSeparator className={item.hiddenIfMd ? 'hidden md:block' : ''} />}
                    </div>
                  )
                }
                return (
                  <div key={`breadcrumb-${i}`} className="flex items-center gap-1.5">
                    <BreadcrumbItem className={item.hiddenIfMd ? 'hidden md:block' : ''}>
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    </BreadcrumbItem>
                    { !isLast && <BreadcrumbSeparator className={item.hiddenIfMd ? 'hidden md:block' : ''} /> }
                  </div>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
      </div>
    </>
  )
}