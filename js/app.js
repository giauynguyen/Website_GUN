let currentLang = 'vi';
    let currentPage = 'home';
    let productFilter = 'all';
    let productSearch = '';
    let financeFilter = 'all';
    let newsFilter = 'all';

    const I18N = {
      vi: {
        slogan: 'UY TÍN · AN TÂM · KỊP THỜI · HIỆU QUẢ',
        nav_home: 'Trang chủ',
        nav_about: 'Giới thiệu',
        nav_services: 'Dịch vụ',
        nav_products: 'Sản phẩm',
        nav_finance: 'Chia sẻ kiến thức',
        nav_news: 'Tin tức',
        nav_contact: 'Liên hệ',
        company_name_full: 'CÔNG TY TNHH GIA UY NGUYỄN',
        address_full: 'Số 39, Tổ 19, Cụm 3, Phường Hồng Hà, Thành phố Hà Nội',
        tax_label: 'MST',
        phone_label: 'Điện thoại',
        footer_desc: 'Đồng hành cùng Quý cơ quan, doanh nghiệp trong toàn bộ vòng đời dự án CNTT, chuyển đổi số, hạ tầng viễn thông và cung cấp giải pháp công nghệ hiệu quả.',
        footer_links_title: 'Liên kết nhanh',
        footer_contact_title: 'Thông tin liên hệ',
        modal_quote_title: 'Yêu cầu báo giá sản phẩm / giải pháp',
        modal_product_label: 'Sản phẩm / Giải pháp quan tâm',
        form_name: 'Họ và tên / Đơn vị *',
        form_phone: 'Số điện thoại *',
        form_note: 'Yêu cầu chi tiết / Số lượng dự kiến',
        btn_cancel: 'Hủy',
        btn_send_quote: 'Gửi yêu cầu báo giá',
        hero_badge: 'Thành lập từ 2012 · Chuẩn quản lý chất lượng ISO 9001:2015',
        hero_title: 'Tư vấn Chuyển đổi số & Giải pháp Hạ tầng CNTT Toàn diện',
        hero_sub: 'Công ty TNHH Gia Uy Nguyễn đồng hành cùng Quý khách hàng từ khảo sát, lập dự án, thiết kế – dự toán, đấu thầu, giám sát đến bảo trì hệ thống.',
        hero_cta_services: 'Khám phá dịch vụ',
        hero_cta_products: 'Xem sản phẩm & giải pháp',
        stat_year: 'Năm thành lập',
        stat_projects: 'Cổng thông tin song ngữ',
        stat_iso: 'Hệ thống quản lý chất lượng',
        stat_capital: 'Tuân thủ quy định pháp luật',
        pillars_title: 'Lĩnh vực hoạt động & Chuyên môn cốt lõi',
        pillars_sub: 'Kết hợp năng lực tư vấn đầu tư công nghệ với giải pháp phần mềm, hạ tầng và tri thức cộng đồng.',
        about_title: 'Về Công ty TNHH Gia Uy Nguyễn',
        about_letter_title: 'Thư ngỏ từ Giám đốc',
        about_letter_p1: 'Thành lập năm 2012, Gia Uy Nguyễn tập trung vào dịch vụ tư vấn đầu tư ứng dụng công nghệ thông tin, chuyển đổi số, hạ tầng viễn thông và phát thanh, truyền hình. Chúng tôi đồng hành cùng chủ đầu tư trong toàn bộ vòng đời dự án: khảo sát, lập dự án, thiết kế và dự toán, thẩm tra, lựa chọn nhà thầu, giám sát.',
        about_letter_p2: 'Với phương châm UY TÍN – AN TÂM – KỊP THỜI – HIỆU QUẢ, chúng tôi cam kết hồ sơ đúng quy định, bảo đảm tiến độ, giải pháp phù hợp thực tế, giúp Quý Khách hàng an tâm triển khai và sử dụng hiệu quả nguồn vốn đầu tư.',
        about_director: 'GIÁM ĐỐC CÔNG TY',
        core_values_title: '4 Giá trị cốt lõi',
        legal_title: 'Thông tin pháp lý doanh nghiệp',
        services_title: 'Dịch vụ Tư vấn Đầu tư & Chuyển đổi số',
        services_sub: 'Tư vấn độc lập, khách quan, tuân thủ đầy đủ quy định pháp luật về đấu thầu và đầu tư công.',
        lifecycle_title: 'Dịch vụ tư vấn theo vòng đời dự án',
        products_title: 'Sản phẩm hàng hóa & Giải pháp CNTT',
        products_sub: 'Phân nhóm theo giải pháp và thiết bị chuyên dụng. Quý khách vui lòng chọn sản phẩm và gửi yêu cầu để nhận báo giá chi tiết theo cấu hình thực tế.',
        products_note: 'Danh mục sản phẩm được thiết kế dạng mô-đun, dễ dàng cập nhật và bổ sung mã hàng mới sau khi đưa website vào vận hành.',
        btn_request_quote: 'Liên hệ báo giá',
        search_placeholder: 'Tìm kiếm giải pháp, thiết bị...',
        finance_title: 'Tri thức cộng đồng',
        finance_sub: 'Chuyên trang chia sẻ tri thức, góc nhìn phân tích vĩ mô, quản trị vốn và tài chính số (không cung cấp dịch vụ môi giới hay tư vấn tài chính thương mại).',
        news_title: 'Tin tức & Cập nhật',
        news_sub: 'Cập nhật các điểm mới về chính sách chuyển đổi số, đầu tư công, đấu thầu và xu hướng công nghệ thông tin.',
        contact_title: 'Liên hệ hợp tác & Tư vấn',
        contact_sub: 'Kết nối trực tiếp với đội ngũ chuyên gia của Công ty TNHH Gia Uy Nguyễn tại Hà Nội.',
        btn_read_more: 'Đọc chi tiết',
        btn_view_all: 'Xem tất cả',
        toast_quote_ok: 'Đã ghi nhận yêu cầu báo giá cho "{item}". Chúng tôi sẽ phản hồi qua giauynguyen@gmail.com hoặc 024.3993 2122.',
        toast_contact_ok: 'Cảm ơn Quý khách đã liên hệ! Thông tin đã được gửi tới Công ty TNHH Gia Uy Nguyễn.',
        contact_send_btn: 'Gửi thông tin liên hệ',
        empty_result: 'Không tìm thấy mục phù hợp với bộ lọc hiện tại.'
      },
      en: {
        slogan: 'PRESTIGE · PEACE OF MIND · TIMELINESS · EFFECTIVENESS',
        nav_home: 'Home',
        nav_about: 'About Us',
        nav_services: 'Services',
        nav_products: 'Products',
        nav_finance: 'Knowledge Sharing',
        nav_news: 'News',
        nav_contact: 'Contact',
        company_name_full: 'GIA UY NGUYEN COMPANY LIMITED',
        address_full: 'No. 39, Group 19, Cluster 3, Hong Ha Ward, Hanoi City, Vietnam',
        tax_label: 'Tax ID',
        phone_label: 'Phone',
        footer_desc: 'Partnering with public agencies and enterprises across the full lifecycle of IT, digital transformation, telecom infrastructure, and technology integration projects.',
        footer_links_title: 'Quick Links',
        footer_contact_title: 'Contact Information',
        modal_quote_title: 'Request Product / Solution Quotation',
        modal_product_label: 'Selected Product / Solution',
        form_name: 'Full Name / Organization *',
        form_phone: 'Phone Number *',
        form_note: 'Technical requirements / Estimated quantity',
        btn_cancel: 'Cancel',
        btn_send_quote: 'Submit Quote Request',
        hero_badge: 'Established 2012 · ISO 9001:2015 Certified Quality Management',
        hero_title: 'Digital Transformation Consulting & Enterprise IT Solutions',
        hero_sub: 'Gia Uy Nguyen Co., Ltd accompanies government agencies and businesses from site survey, feasibility & cost estimation, e-procurement consulting, and supervision to system integration.',
        hero_cta_services: 'Explore Services',
        hero_cta_products: 'Browse Products',
        stat_year: 'Year Established',
        stat_projects: 'Bilingual Portal',
        stat_iso: 'Quality Management',
        stat_capital: 'Regulatory Compliance',
        pillars_title: 'Core Domains & Capabilities',
        pillars_sub: 'Combining compliant public-sector IT investment consulting with enterprise hardware/software solutions and financial literacy.',
        about_title: 'About Gia Uy Nguyen Co., Ltd',
        about_letter_title: 'Open Letter from the Director',
        about_letter_p1: 'Founded in 2012, Gia Uy Nguyen specializes in IT investment consulting, digital transformation, telecom infrastructure, and broadcasting systems. We support project owners throughout the entire project lifecycle: survey, project formulation, design & cost estimation, verification, contractor selection, and supervision.',
        about_letter_p2: 'Guided by PRESTIGE – PEACE OF MIND – TIMELINESS – EFFECTIVENESS, we guarantee compliant documentation, strict schedules, and practical technology choices for optimal capital efficiency.',
        about_director: 'GIA UY NGUYEN COMPANY LIMITED',
        core_values_title: '4 Core Values',
        legal_title: 'Corporate & Legal Profile',
        services_title: 'Digital Transformation & IT Consulting Services',
        services_sub: 'Independent, objective consulting strictly adhering to Vietnam bidding and public investment regulations.',
        lifecycle_title: 'Lifecycle Consulting Services',
        products_title: 'IT Products & Integrated Solutions',
        products_sub: 'Organized by solution and equipment category. No public pricing is listed — click Request Quote to receive tailored pricing for your configuration.',
        products_note: 'Modular catalog architecture ready for adding new SKUs and vendor lines anytime after website launch.',
        btn_request_quote: 'Request Quote',
        search_placeholder: 'Search solutions, equipment...',
        finance_title: 'Knowledge Sharing',
        finance_sub: 'Educational knowledge hub covering macroeconomics, capital & risk management, and digital finance (non-commercial knowledge sharing only).',
        news_title: 'News & Updates',
        news_sub: 'Latest updates on digital transformation policies, public procurement regulations, and enterprise IT trends.',
        contact_title: 'Contact & Consultation',
        contact_sub: 'Connect directly with Gia Uy Nguyen Co., Ltd specialists in Hanoi.',
        btn_read_more: 'Read More',
        btn_view_all: 'View All',
        toast_quote_ok: 'Quote request recorded for "{item}". Our team will respond via giauynguyen@gmail.com or 024.3993 2122.',
        toast_contact_ok: 'Thank you! Your message has been received by Gia Uy Nguyen Co., Ltd.',
        contact_send_btn: 'Send Message',
        empty_result: 'No items match the current filter.'
      }
    };

    const CORE_VALUES = [
      {
        title: { vi: 'UY TÍN', en: 'PRESTIGE' },
        desc: {
          vi: 'Hoạt động liên tục từ năm 2012. Tư vấn độc lập, khách quan, trung thực và chuyên nghiệp, là người đồng hành tin cậy .',
          en: 'Operating continuously since 2012. Independent, objective, transparent, and professional consulting.'
        }
      },
      {
        title: { vi: 'AN TÂM', en: 'PEACE OF MIND' },
        desc: {
          vi: 'Hồ sơ tuân thủ đầy đủ quy định về đầu tư, đấu thầu, CNTT và chuyển đổi số; đồng hành giải trình khi thẩm định, thanh tra.',
          en: 'Full compliance with investment, bidding, and digital transformation laws; dedicated support during audits and appraisals.'
        }
      },
      {
        title: { vi: 'KỊP THỜI', en: 'TIMELINESS' },
        desc: {
          vi: 'Bám sát kế hoạch vốn và tiến độ của chủ đầu tư, phản hồi nhanh yêu cầu điều chỉnh và cập nhật chính sách mới.',
          en: 'Aligned with capital disbursement schedules, rapid response to revisions, and up-to-date regulatory tracking.'
        }
      },
      {
        title: { vi: 'HIỆU QUẢ', en: 'EFFECTIVENESS' },
        desc: {
          vi: 'Giải pháp phù hợp nhu cầu thực tế và xu thế công nghệ; kiểm soát dự toán chi phí hợp lý, tiết kiệm vốn.',
          en: 'Practical technology fit, reasonable control of cost estimates, ensuring optimal investment efficiency.'
        }
      }
    ];

    const LIFECYCLE_STAGES = [
      {
        stage: { vi: 'Chuẩn bị đầu tư', en: 'Investment Preparation' },
        items: {
          vi: ['Khảo sát hiện trạng, xác định nhu cầu đầu tư', 'Lập Báo cáo nghiên cứu khả thi, Báo cáo kinh tế – kỹ thuật', 'Lập Thiết kế và dự toán chi tiết', 'Thẩm tra dự án, BCKTKT, Đề cương và dự toán chi tiết'],
          en: ['Site & current-state survey, investment needs assessment', 'Feasibility Study & Techno-Economic Report formulation', 'Detailed Outline & Cost Estimation', 'Independent verification of projects & cost estimates']
        }
      },
      {
        stage: { vi: 'Thực hiện đầu tư', en: 'Investment Execution' },
        items: {
          vi: ['Lập thiết kế thi công / thiết kế chi tiết và dự toán', 'Thẩm tra thiết kế chi tiết và dự toán', 'Lập E-HSMT, đánh giá E-HSDT; thẩm định HSMT & KQLCNT', 'Giám sát thi công, lắp đặt thiết bị, triển khai phần mềm'],
          en: ['Detailed engineering design & bill of quantities', 'Verification of detailed design & budgets', 'E-HSMT preparation, E-HSDT evaluation & procurement appraisal', 'Construction, hardware installation & software deployment supervision']
        }
      },
      {
        stage: { vi: 'Kết thúc & Vận hành', en: 'Handover & Operation' },
        items: {
          vi: ['Hỗ trợ nghiệm thu, bàn giao, quyết toán dự án', 'Tư vấn quản lý dự án và chuyển giao công nghệ', 'Tích hợp, bảo trì hệ thống CNTT – viễn thông theo nhu cầu'],
          en: ['Acceptance testing, handover & final settlement support', 'Project management & technology transfer consulting', 'IT & telecom system integration and maintenance']
        }
      }
    ];

    const PRODUCTS_DATA = [
      {
        id: 'prod-1',
        cat: 'network',
        catLabel: { vi: 'Hạ tầng mạng & Bảo mật', en: 'Network & Security' },
        name: { vi: 'Tường lửa thế hệ mới & Thiết bị bảo mật mạng (NGFW / IPS)', en: 'Next-Generation Firewall & Network Security (NGFW / IPS)' },
        desc: {
          vi: 'Giải pháp bảo vệ biên mạng doanh nghiệp và trung tâm dữ liệu, kiểm soát truy cập sâu, chống xâm nhập và hỗ trợ VPN đa chi nhánh.',
          en: 'Perimeter security for enterprise and data centers with deep packet inspection, IPS, and multi-site VPN.'
        },
        specs: ['Throughput 10–100 Gbps', 'HA Active-Passive', 'ISO/IEC 27001 Ready']
      },
      {
        id: 'prod-2',
        cat: 'network',
        catLabel: { vi: 'Hạ tầng mạng & Bảo mật', en: 'Network & Security' },
        name: { vi: 'Thiết bị chuyển mạch Core / Access & Wi-Fi Doanh nghiệp', en: 'Enterprise Core/Access Switches & Wireless Infrastructure' },
        desc: {
          vi: 'Hệ thống mạng LAN/WAN tốc độ cao, chuyển mạch lớp 3 dự phòng nguồn kép, quản trị tập trung trên nền tảng Cloud hoặc On-Premise.',
          en: 'High-speed L2/L3 switching with redundant power supplies and centralized Cloud/On-Premise management.'
        },
        specs: ['10G/25G/40G Uplinks', 'PoE+ / Wi-Fi 6E', 'Centralized Controller']
      },
      {
        id: 'prod-3',
        cat: 'server',
        catLabel: { vi: 'Máy chủ & Lưu trữ', en: 'Servers & Storage' },
        name: { vi: 'Máy chủ Rack / Blade & Hạ tầng siêu hội tụ (HCI)', en: 'Enterprise Rack Servers & Hyper-Converged Infrastructure (HCI)' },
        desc: {
          vi: 'Cấu hình máy chủ xử lý hiệu năng cao cho ảo hóa, cơ sở dữ liệu lớn, hệ thống điều hành sản xuất và cổng dịch vụ công.',
          en: 'High-performance compute nodes tailored for virtualization, core databases, and public service portals.'
        },
        specs: ['Dual Xeon Scalable', 'NVMe All-Flash', 'Redundant PSU & Cooling']
      },
      {
        id: 'prod-4',
        cat: 'server',
        catLabel: { vi: 'Máy chủ & Lưu trữ', en: 'Servers & Storage' },
        name: { vi: 'Hệ thống lưu trữ SAN / NAS & Giải pháp Sao lưu dự phòng', en: 'SAN / NAS Storage Systems & Disaster Recovery Backup' },
        desc: {
          vi: 'Lưu trữ tập trung dung lượng mở rộng linh hoạt, tích hợp cơ chế chống mã độc tống tiền (Immutable Backup) và sao lưu đa địa điểm.',
          en: 'Scalable centralized storage with immutable ransomware protection and offsite replication.'
        },
        specs: ['SAN/NAS Unified', 'Immutable Snapshots', 'RPO/RTO Optimized']
      },
      {
        id: 'prod-5',
        cat: 'software',
        catLabel: { vi: 'Phần mềm ERP/MES', en: 'Enterprise Software' },
        name: { vi: 'Hệ thống quản trị doanh nghiệp (ERP) & Điều hành sản xuất (MES)', en: 'Enterprise Resource Planning (ERP) & Manufacturing Execution (MES)' },
        desc: {
          vi: 'Nền tảng số hóa quy trình tài chính, kho vận, nhân sự và tự động hóa giám sát dây chuyền sản xuất theo thời gian thực.',
          en: 'End-to-end digitization for finance, supply chain, HR, and real-time shop-floor manufacturing execution.'
        },
        specs: ['Microservices / API', 'Role-Based Security', 'Real-time BI Dashboard']
      },
      {
        id: 'prod-6',
        cat: 'broadcast',
        catLabel: { vi: 'Phát thanh - Truyền hình', en: 'Broadcasting & AV' },
        name: { vi: 'Thiết bị trường quay, Hậu kỳ & Truyền thanh cơ sở thông minh', en: 'Studio Production, Post-Production & Smart IP Broadcasting' },
        desc: {
          vi: 'Cung cấp đồng bộ thiết bị sản xuất chương trình HD/4K, lưu trữ chuyên dụng, hệ thống truyền dẫn và cụm thu phát thanh IP.',
          en: 'Turnkey HD/4K studio equipment, broadcast storage, transmission links, and IP public-address clusters.'
        },
        specs: ['HD/4K Studio & Master Control', 'Broadcast Storage', 'Truyền thanh thông minh IP']
      },
      {
        id: 'prod-7',
        cat: 'office_it',
        catLabel: { vi: 'Máy tính, Thiết bị văn phòng', en: 'PCs, Laptops, Office equipments' },
        name: { vi: 'Máy tính để bàn (Desktop PC), Máy trạm & Laptop Doanh nghiệp', en: 'Business Desktops, Workstations & Enterprise Laptops' },
        desc: {
          vi: 'Cung cấp đồng bộ máy tính văn phòng, máy trạm đồ họa – kỹ thuật và laptop doanh nghiệp cấu hình ổn định, bảo hành chính hãng.',
          en: 'Enterprise desktops, engineering workstations, and business laptops with official manufacturer warranty.'
        },
        specs: ['Intel Core / Ultra / Xeon', 'Windows Pro OEM', 'Bảo hành chính hãng']
      },
      {
        id: 'prod-8',
        cat: 'office_it',
        catLabel: { vi: 'Máy tính, Thiết bị văn phòng', en: 'PCs, Laptops, Office equipments' },
        name: { vi: 'Máy in Laser/Màu, Máy đa năng & Máy scan tài liệu tốc độ cao', en: 'Laser/Color Printers, MFPs & High-Speed Document Scanners' },
        desc: {
          vi: 'Thiết bị in ấn và số hóa tài liệu chuyên dụng cho văn phòng, cơ quan, hỗ trợ in mạng, đảo mặt tự động và quét tài liệu số lượng lớn.',
          en: 'Networked duplex printers and high-speed ADF document scanners for enterprise digitization.'
        },
        specs: ['In mạng LAN/Wi-Fi', 'Duplex / ADF tốc độ cao', 'Hỗ trợ số hóa lưu trữ']
      },
      {
        id: 'prod-9',
        cat: 'licensing',
        catLabel: { vi: 'Bản quyền phần mềm', en: 'Software Licensing' },
        name: { vi: 'Bản quyền Hệ điều hành, Bộ ứng dụng văn phòng & Phần mềm chuyên dụng', en: 'OS, Office Productivity & Enterprise Software Licensing' },
        desc: {
          vi: 'Cung cấp bản quyền phần mềm chính hãng: Windows, Microsoft 365/Office, phần mềm diệt virus, sao lưu, cơ sở dữ liệu và ảo hóa.',
          en: 'Genuine commercial licensing for Windows, Microsoft 365/Office, endpoint security, backup, and virtualization.'
        },
        specs: ['Chứng nhận bản quyền', 'Hỗ trợ gia hạn & nâng cấp', 'Tuân thủ kiểm toán CNTT']
      },
      {
        id: 'prod-10',
        cat: 'components',
        catLabel: { vi: 'Linh kiện máy tính', en: 'Computer Components' },
        name: { vi: 'Linh kiện máy tính & Phụ kiện nâng cấp (RAM, SSD, CPU, PSU, Màn hình)', en: 'Computer Components & Upgrades (RAM, SSD, CPU, PSU, Monitors)' },
        desc: {
          vi: 'Cung cấp linh kiện chính hãng phục vụ thay thế, sửa chữa và nâng cấp hiệu năng cho máy tính, máy trạm và thiết bị văn phòng.',
          en: 'Genuine replacement and upgrade components for desktops, workstations, and office IT systems.'
        },
        specs: ['RAM DDR4/DDR5 & NVMe SSD', 'CPU / Mainboard / PSU', 'Màn hình & Phụ kiện']
      }
    ];

    const FINANCE_ARTICLES = [
      {
        id: 'fin-1',
        cat: 'risk',
        catLabel: { vi: 'Quản trị vốn & Rủi ro', en: 'Capital & Risk' },
        date: '10/11/2026',
        title: {
          vi: 'Nguyên tắc phân bổ vốn và kiểm soát Drawdown trong đầu tư đa tài sản',
          en: 'Capital Allocation & Drawdown Control Principles in Multi-Asset Investing'
        },
        summary: {
          vi: 'Cách thiết lập ngưỡng rủi ro tối đa trên mỗi vị thế (1–2% NAV), đa dạng hóa tương quan thấp và kỷ luật tái cân bằng danh mục.',
          en: 'How to set per-position risk limits (1–2% NAV), diversify across low-correlation assets, and enforce portfolio rebalancing.'
        },
        body: {
          vi: 'Quản trị rủi ro là nền tảng quyết định sự tồn tại dài hạn trên thị trường tài chính. Bài viết phân tích khung phân bổ vốn theo phương pháp Risk Parity, cách tính kích thước vị thế dựa trên biến động (ATR/Standard Deviation) và thiết lập ngưỡng dừng lỗ danh mục theo tuần/tháng để bảo vệ thành quả lợi nhuận kép.',
          en: 'Risk management is the cornerstone of long-term survival in financial markets. This guide covers Risk Parity allocation, volatility-adjusted position sizing, and weekly/monthly portfolio drawdown limits to protect compounding returns.'
        }
      },
      {
        id: 'fin-2',
        cat: 'macro',
        catLabel: { vi: 'Vĩ mô & Chính sách', en: 'Macro & Policy' },
        date: '02/11/2026',
        title: {
          vi: 'Đọc hiểu chu kỳ lãi suất, thanh khoản và tác động tới định giá tài sản',
          en: 'Understanding Interest Rate Cycles, Liquidity & Asset Valuation'
        },
        summary: {
          vi: 'Mối liên hệ giữa chính sách tiền tệ của các ngân hàng trung ương lớn, đường cong lợi suất trái phiếu và dòng tiền vào cổ phiếu/tài sản số.',
          en: 'How central bank monetary policy, bond yield curves, and global liquidity drive equity and digital asset valuations.'
        },
        body: {
          vi: 'Khi chi phí vốn thay đổi, hệ số chiết khấu dòng tiền (DCF) của doanh nghiệp công nghệ và tăng trưởng chịu tác động trực tiếp. Nắm bắt các chỉ báo dẫn dắt như CPI lõi, lợi suất trái phiếu chính phủ kỳ hạn 10 năm và tăng trưởng cung tiền M2 giúp nhà đầu tư chủ động điều chỉnh tỷ trọng phòng thủ hoặc tăng trưởng.',
          en: 'Shifts in the cost of capital directly impact DCF multiples for technology and growth equities. Tracking leading indicators such as core CPI, 10-year sovereign yields, and M2 money supply growth helps investors rotate proactively between defensive and growth allocations.'
        }
      },
      {
        id: 'fin-3',
        cat: 'digital',
        catLabel: { vi: 'Tài chính số', en: 'Digital Finance' },
        date: '24/10/2026',
        title: {
          vi: 'Ứng dụng phân tích dữ liệu định lượng trong đánh giá hiệu quả dự án đầu tư',
          en: 'Quantitative Data Analytics in Investment Project Appraisal'
        },
        summary: {
          vi: 'Kết hợp mô phỏng Monte Carlo, NPV, IRR và phân tích độ nhạy để đánh giá tính khả thi tài chính của các dự án chuyển đổi số.',
          en: 'Combining Monte Carlo simulation, NPV, IRR, and sensitivity analysis to appraise digital transformation investments.'
        },
        body: {
          vi: 'Trong các dự án đầu tư công nghệ, dòng tiền lợi ích thường đến từ tối ưu chi phí vận hành và tăng năng suất. Việc áp dụng mô hình định lượng giúp lượng hóa các kịch bản lạc quan, cơ sở và thận trọng trước khi ra quyết định giải ngân vốn.',
          en: 'In technology investment projects, cash-flow benefits often stem from operational efficiency and productivity gains. Quantitative modeling quantifies optimistic, base, and conservative scenarios prior to capital commitment.'
        }
      }
    ];

    const NEWS_DATA = [
      {
        id: 'news-1',
        cat: 'policy',
        catLabel: { vi: 'Chính sách & Đấu thầu', en: 'Policy & Procurement' },
        date: '10/11/2026',
        title: {
          vi: 'Lưu ý mới khi lập E-HSMT gói thầu mua sắm thiết bị CNTT & phần mềm nội bộ',
          en: 'Key Guidelines for Preparing E-HSMT in IT Hardware & Software Procurement'
        },
        summary: {
          vi: 'Tổng hợp các quy định đảm bảo cạnh tranh công bằng, tránh điều kiện hạn chế nhà thầu theo Luật Đấu thầu sửa đổi và Nghị định 214/2025/NĐ-CP.',
          en: 'Summary of fair-competition rules and avoiding restrictive clauses under the amended Bidding Law and Decree 214/2025/ND-CP.'
        },
        body: {
          vi: 'Khi xây dựng tiêu chuẩn đánh giá kỹ thuật cho gói thầu CNTT, bên mời thầu cần căn cứ trực tiếp vào yêu cầu vận hành thực tế, không đưa nhãn hiệu cụ thể trừ trường hợp đặc thù được pháp luật cho phép, đồng thời rà soát kỹ hiệu lực các tiêu chuẩn ISO như ISO/IEC 27001:2022.',
          en: 'When drafting technical evaluation criteria for IT packages, procuring entities must base specs on functional requirements, avoid brand-specific lock-ins unless legally justified, and verify current ISO standards such as ISO/IEC 27001:2022.'
        }
      },
      {
        id: 'news-2',
        cat: 'tech',
        catLabel: { vi: 'Công nghệ & Chuyển đổi số', en: 'Tech & Digital Transformation' },
        date: '02/11/2026',
        title: {
          vi: 'Xu hướng chuẩn hóa hạ tầng lưu trữ chống mã độc tống tiền (Immutable Backup)',
          en: 'Trends in Ransomware-Resilient Storage with Immutable Backup'
        },
        summary: {
          vi: 'Giải pháp bảo vệ dữ liệu doanh nghiệp bằng bản sao lưu bất biến và phục hồi nhanh RPO/RTO.',
          en: 'Protecting enterprise data with immutable snapshots and rapid RPO/RTO recovery.'
        },
        body: {
          vi: 'Các tổ chức hiện đại đang chuyển dịch sang mô hình sao lưu 3-2-1-1-0 kết hợp phân vùng lưu trữ bất biến (Immutable Storage) nhằm đảm bảo dữ liệu không thể bị mã hóa hoặc xóa trái phép trong các sự cố an ninh mạng.',
          en: 'Modern organizations are adopting the 3-2-1-1-0 backup rule with immutable storage tiers so critical data cannot be encrypted or deleted during cyber incidents.'
        }
      },
      {
        id: 'news-3',
        cat: 'policy',
        catLabel: { vi: 'Chính sách & Đấu thầu', en: 'Policy & Procurement' },
        date: '22/10/2026',
        title: {
          vi: 'Hướng dẫn áp dụng định mức và phương pháp lập dự toán chuyển đổi số mới',
          en: 'Applying Updated Cost Norms and Budgeting Methods for Digital Transformation'
        },
        summary: {
          vi: 'Điểm mới về xác định chi phí phần mềm nội bộ, chi phí thiết bị và dịch vụ tư vấn theo quy định hiện hành.',
          en: 'Key updates on estimating internal software, hardware, and consulting costs under current regulations.'
        },
        body: {
          vi: 'Việc lập dự toán cho các nhiệm vụ và dự án chuyển đổi số cần tách bạch rõ hạng mục phần mềm nội bộ, bản quyền phần mềm thương mại, hạ tầng phần cứng và chi phí đào tạo, bảo hành để đảm bảo tính minh bạch khi thẩm định.',
          en: 'Digital transformation budgeting requires clear separation between custom software, commercial licenses, hardware infrastructure, and training/warranty costs to streamline appraisal.'
        }
      }
    ];

    function t(key) {
      return (I18N[currentLang] && I18N[currentLang][key]) || key;
    }

    function setLang(lang) {
      currentLang = lang;
      document.documentElement.lang = lang;
      const btnVi = document.getElementById('btn-lang-vi');
      const btnEn = document.getElementById('btn-lang-en');
      if (lang === 'vi') {
        btnVi.className = 'px-2.5 py-1.5 rounded-md transition bg-brand-orange text-white';
        btnEn.className = 'px-2.5 py-1.5 rounded-md transition text-brand-navy hover:text-brand-orange';
      } else {
        btnEn.className = 'px-2.5 py-1.5 rounded-md transition bg-brand-orange text-white';
        btnVi.className = 'px-2.5 py-1.5 rounded-md transition text-brand-navy hover:text-brand-orange';
      }
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (I18N[lang][k]) el.textContent = I18N[lang][k];
      });
      renderPage();
    }

    function navigateTo(page) {
      currentPage = page;
      document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('data-nav') === page) {
          btn.classList.add('nav-link-active');
        } else {
          btn.classList.remove('nav-link-active');
        }
      });
      renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleMobileMenu() {
      const m = document.getElementById('mobile-menu');
      m.classList.toggle('hidden');
    }

    function openQuoteModal(productName) {
      document.getElementById('quote-product-input').value = productName;
      document.getElementById('quote-modal').classList.remove('hidden');
    }

    function closeQuoteModal() {
      document.getElementById('quote-modal').classList.add('hidden');
    }

    function submitQuoteForm(e) {
      e.preventDefault();
      const item = document.getElementById('quote-product-input').value;
      closeQuoteModal();
      e.target.reset();
      showToast(t('toast_quote_ok').replace('{item}', item));
    }

    function submitContactForm(e) {
      e.preventDefault();
      e.target.reset();
      showToast(t('toast_contact_ok'));
    }

    function openArticleModal(type, id) {
      const list = type === 'finance' ? FINANCE_ARTICLES : NEWS_DATA;
      const item = list.find(x => x.id === id);
      if (!item) return;
      document.getElementById('article-modal-tag').textContent = item.catLabel[currentLang];
      document.getElementById('article-modal-title').textContent = item.title[currentLang];
      document.getElementById('article-modal-date').textContent = item.date;
      document.getElementById('article-modal-body').innerHTML = `
        <p class="font-semibold text-brand-navy">${item.summary[currentLang]}</p>
        <p>${item.body[currentLang]}</p>
      `;
      document.getElementById('article-modal').classList.remove('hidden');
    }

    function closeArticleModal() {
      document.getElementById('article-modal').classList.add('hidden');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 4500);
    }

    function renderHome() {
      const featuredProducts = PRODUCTS_DATA.slice(0, 3);
      const featuredFinance = FINANCE_ARTICLES.slice(0, 2);
      const featuredNews = NEWS_DATA.slice(0, 2);

      return `
        <!-- Hero Section -->
        <section class="navy-gradient text-white relative overflow-hidden">
          <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-orange/20 blur-3xl"></div>
          <div class="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-brand-blue/25 blur-3xl"></div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div class="max-w-3xl">
              <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-brand-cream mb-6">
                <span class="w-2 h-2 rounded-full bg-brand-orange"></span>
                ${t('hero_badge')}
              </span>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                ${t('hero_title')}
              </h1>
              <p class="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                ${t('hero_sub')}
              </p>
              <div class="flex flex-wrap gap-3">
                <button type="button" onclick="navigateTo('services')" class="px-6 py-3.5 rounded-xl v2b-gradient text-white font-bold text-sm shadow-lg hover:opacity-95 transition">
                  ${t('hero_cta_services')}
                </button>
                <button type="button" onclick="navigateTo('products')" class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm transition">
                  ${t('hero_cta_products')}
                </button>
              </div>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/15">
              <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div class="text-2xl sm:text-3xl font-extrabold text-brand-amber">2012</div>
                <div class="text-xs text-slate-300 mt-1">${t('stat_year')}</div>
              </div>
              <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div class="text-2xl sm:text-3xl font-extrabold text-brand-amber">VI / EN</div>
                <div class="text-xs text-slate-300 mt-1">${t('stat_projects')}</div>
              </div>
              <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div class="text-2xl sm:text-3xl font-extrabold text-brand-amber">ISO 9001:2015</div>
                <div class="text-xs text-slate-300 mt-1">${t('stat_iso')}</div>
              </div>
              <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div class="text-2xl sm:text-3xl font-extrabold text-brand-amber">100%</div>
                <div class="text-xs text-slate-300 mt-1">${t('stat_capital')}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Core Pillars -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">${t('pillars_title')}</h2>
            <p class="text-sm text-slate-600">${t('pillars_sub')}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl p-6 border border-slate-200 card-hover">
              <div class="w-11 h-11 rounded-xl v2b-gradient text-white flex items-center justify-center font-extrabold mb-4">01</div>
              <h3 class="text-lg font-bold text-brand-navy mb-2">${currentLang === 'vi' ? 'Tư vấn Chuyển đổi số & Đầu tư CNTT' : 'Digital Transformation Consulting'}</h3>
              <p class="text-sm text-slate-600 mb-4">${currentLang === 'vi' ? 'Lập dự án, BCKTKT, thiết kế – dự toán, thẩm tra, lập E-HSMT/đánh giá E-HSDT và giám sát triển khai.' : 'Project formulation, design & cost estimation, verification, e-procurement, and supervision.'}</p>
              <button type="button" onclick="navigateTo('services')" class="text-xs font-bold text-brand-orange hover:underline">${t('btn_read_more')} →</button>
            </div>
            <div class="bg-white rounded-2xl p-6 border border-slate-200 card-hover">
              <div class="w-11 h-11 rounded-xl bg-brand-navy text-white flex items-center justify-center font-extrabold mb-4">02</div>
              <h3 class="text-lg font-bold text-brand-navy mb-2">${currentLang === 'vi' ? 'Cung cấp Giải pháp & Thiết bị CNTT' : 'IT Equipment & Solutions'}</h3>
              <p class="text-sm text-slate-600 mb-4">${currentLang === 'vi' ? 'Máy tính, Laptop, máy in/scan, bản quyền phần mềm, linh kiện, hạ tầng mạng – máy chủ, ERP/MES và phát thanh truyền hình.' : 'PCs, laptops, printers/scanners, software licensing, components, networking, servers, ERP/MES, and broadcasting.'}</p>
              <button type="button" onclick="navigateTo('products')" class="text-xs font-bold text-brand-orange hover:underline">${t('btn_view_all')} →</button>
            </div>
            <div class="bg-white rounded-2xl p-6 border border-slate-200 card-hover">
              <div class="w-11 h-11 rounded-xl bg-brand-blue text-white flex items-center justify-center font-extrabold mb-4">03</div>
              <h3 class="text-lg font-bold text-brand-navy mb-2">${currentLang === 'vi' ? 'Chia sẻ kiến thức' : 'Knowledge Sharing'}</h3>
              <p class="text-sm text-slate-600 mb-4">${currentLang === 'vi' ? 'Chuyên mục chia sẻ kiến thức phân tích vĩ mô, quản trị vốn – rủi ro và tài chính số.' : 'Educational insights on macroeconomics, capital & risk management, and digital finance.'}</p>
              <button type="button" onclick="navigateTo('finance')" class="text-xs font-bold text-brand-orange hover:underline">${t('btn_read_more')} →</button>
            </div>
          </div>
        </section>

        <!-- Featured Products Preview -->
        <section class="bg-white border-y border-slate-200 py-14">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <h2 class="text-2xl font-extrabold text-brand-navy">${t('products_title')}</h2>
                <p class="text-sm text-slate-600 mt-1">${t('products_sub')}</p>
              </div>
              <button type="button" onclick="navigateTo('products')" class="px-4 py-2 rounded-xl border border-brand-orange text-brand-orange text-xs font-bold hover:bg-orange-50 transition">${t('btn_view_all')}</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${featuredProducts.map(p => renderProductCard(p)).join('')}
            </div>
          </div>
        </section>

        <!-- Finance & News Split -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-extrabold text-brand-navy">${t('finance_title')}</h2>
                <button type="button" onclick="navigateTo('finance')" class="text-xs font-bold text-brand-orange hover:underline">${t('btn_view_all')} →</button>
              </div>
              <div class="space-y-4">
                ${featuredFinance.map(a => `
                  <div class="bg-white rounded-2xl p-5 border border-slate-200 card-hover">
                    <div class="flex items-center justify-between text-xs mb-2">
                      <span class="px-2.5 py-0.5 rounded-full bg-orange-100 text-brand-orange font-bold">${a.catLabel[currentLang]}</span>
                      <span class="text-slate-400">${a.date}</span>
                    </div>
                    <h3 class="font-bold text-brand-navy text-base mb-1.5">${a.title[currentLang]}</h3>
                    <p class="text-xs text-slate-600 mb-3">${a.summary[currentLang]}</p>
                    <button type="button" onclick="openArticleModal('finance','${a.id}')" class="text-xs font-bold text-brand-blue hover:underline">${t('btn_read_more')}</button>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-extrabold text-brand-navy">${t('news_title')}</h2>
                <button type="button" onclick="navigateTo('news')" class="text-xs font-bold text-brand-orange hover:underline">${t('btn_view_all')} →</button>
              </div>
              <div class="space-y-4">
                ${featuredNews.map(n => `
                  <div class="bg-white rounded-2xl p-5 border border-slate-200 card-hover">
                    <div class="flex items-center justify-between text-xs mb-2">
                      <span class="px-2.5 py-0.5 rounded-full bg-blue-100 text-brand-blue font-bold">${n.catLabel[currentLang]}</span>
                      <span class="text-slate-400">${n.date}</span>
                    </div>
                    <h3 class="font-bold text-brand-navy text-base mb-1.5">${n.title[currentLang]}</h3>
                    <p class="text-xs text-slate-600 mb-3">${n.summary[currentLang]}</p>
                    <button type="button" onclick="openArticleModal('news','${n.id}')" class="text-xs font-bold text-brand-blue hover:underline">${t('btn_read_more')}</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    }

    function renderAbout() {
      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="mb-10">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_about')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1">${t('about_title')}</h1>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div class="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 class="text-xl font-bold text-brand-navy mb-4">${t('about_letter_title')}</h2>
              <p class="text-sm text-slate-700 leading-relaxed mb-4">${t('about_letter_p1')}</p>
              <p class="text-sm text-slate-700 leading-relaxed mb-6">${t('about_letter_p2')}</p>
              <div class="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <span class="font-bold text-brand-navy text-sm">${t('about_director')}</span>
                <span class="text-xs font-bold text-brand-orange">${t('slogan')}</span>
              </div>
            </div>

            <div class="bg-brand-navy text-white rounded-2xl p-6 sm:p-8">
              <h2 class="text-lg font-bold mb-4 text-brand-amber">${t('legal_title')}</h2>
              <dl class="space-y-3 text-xs sm:text-sm">
                <div><dt class="text-slate-400">${currentLang === 'vi' ? 'Tên đầy đủ' : 'Legal Name'}</dt><dd class="font-semibold">${t('company_name_full')}</dd></div>
                                <div><dt class="text-slate-400">${t('tax_label')}</dt><dd class="font-semibold">0106055545</dd></div>
                                <div><dt class="text-slate-400">${currentLang === 'vi' ? 'Trụ sở' : 'Headquarters'}</dt><dd class="font-semibold">${t('address_full')}</dd></div>
                <div><dt class="text-slate-400">${t('phone_label')}</dt><dd class="font-semibold">024.3993 2122</dd></div>
                <div><dt class="text-slate-400">Email</dt><dd class="font-semibold">giauynguyen@gmail.com</dd></div>
              </dl>
            </div>
          </div>

          <h2 class="text-2xl font-extrabold text-brand-navy mb-6">${t('core_values_title')}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${CORE_VALUES.map((v, i) => `
              <div class="bg-white rounded-2xl p-6 border border-slate-200 card-hover">
                <div class="text-xs font-extrabold text-brand-orange mb-2">0${i + 1}</div>
                <h3 class="text-lg font-extrabold text-brand-navy mb-2">${v.title[currentLang]}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">${v.desc[currentLang]}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderServices() {
      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="max-w-3xl mb-10">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_services')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1 mb-3">${t('services_title')}</h1>
            <p class="text-sm text-slate-600">${t('services_sub')}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 class="font-bold text-brand-navy text-lg mb-2">${currentLang === 'vi' ? 'Ứng dụng CNTT & Chuyển đổi số' : 'IT Application & Digital Transformation'}</h3>
              <p class="text-sm text-slate-600">${currentLang === 'vi' ? 'Cơ sở dữ liệu, phần mềm nghiệp vụ, nền tảng tích hợp – chia sẻ dữ liệu và hệ thống quản trị doanh nghiệp (ERP, MES).' : 'Databases, operational software, data integration platforms, and enterprise management systems (ERP, MES).'}</p>
            </div>
            <div class="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 class="font-bold text-brand-navy text-lg mb-2">${currentLang === 'vi' ? 'Hạ tầng CNTT – Viễn thông & ATTT' : 'IT Infrastructure & Cybersecurity'}</h3>
              <p class="text-sm text-slate-600">${currentLang === 'vi' ? 'Mạng máy tính, máy chủ, lưu trữ, trung tâm dữ liệu dự phòng, an ninh mạng và truy nhập vô tuyến băng rộng.' : 'Networking, servers, storage, backup data centers, cybersecurity, and broadband wireless access.'}</p>
            </div>
            <div class="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 class="font-bold text-brand-navy text-lg mb-2">${currentLang === 'vi' ? 'Phát thanh & Truyền hình' : 'Broadcasting & Television'}</h3>
              <p class="text-sm text-slate-600">${currentLang === 'vi' ? 'Thiết bị sản xuất chương trình, trường quay, lưu trữ – hậu kỳ, phát sóng, truyền dẫn và truyền thanh cơ sở.' : 'Studio production gear, post-production storage, broadcast transmission, and IP public-address systems.'}</p>
            </div>
          </div>

          <h2 class="text-2xl font-extrabold text-brand-navy mb-6">${t('lifecycle_title')}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${LIFECYCLE_STAGES.map((s, idx) => `
              <div class="bg-white rounded-2xl p-6 border-t-4 ${idx === 0 ? 'border-brand-orange' : idx === 1 ? 'border-brand-navy' : 'border-brand-blue'} shadow-sm">
                <h3 class="text-lg font-extrabold text-brand-navy mb-4">${s.stage[currentLang]}</h3>
                <ul class="space-y-2.5 text-sm text-slate-700">
                  ${s.items[currentLang].map(it => `<li class="flex items-start gap-2"><span class="text-brand-orange font-bold">•</span><span>${it}</span></li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderProductCard(p) {
      const safeName = p.name[currentLang].replace(/'/g, "\\'");
      return `
        <div class="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between card-hover">
          <div>
            <span class="inline-block px-2.5 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold mb-3">${p.catLabel[currentLang]}</span>
            <h3 class="text-base font-bold text-brand-navy mb-2">${p.name[currentLang]}</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">${p.desc[currentLang]}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${(Array.isArray(p.specs) ? p.specs : []).map(sp => `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">${sp}</span>`).join('')}
            </div>
          </div>
          <button type="button" onclick="openQuoteModal('${safeName}')" class="w-full py-2.5 px-4 rounded-xl v2b-gradient text-white text-xs font-bold shadow hover:opacity-95 transition">
            ${t('btn_request_quote')}
          </button>
        </div>
      `;
    }

    function setProductFilter(cat) {
      productFilter = cat;
      renderPage();
    }

    function onProductSearch(val) {
      productSearch = val.toLowerCase();
      renderPage();
      const inp = document.getElementById('prod-search-input');
      if (inp) {
        inp.focus();
        inp.setSelectionRange(inp.value.length, inp.value.length);
      }
    }

    function renderProducts() {
      const cats = [
        { id: 'all', label: currentLang === 'vi' ? 'Tất cả' : 'All' },
        { id: 'office_it', label: currentLang === 'vi' ? 'Máy tính, Thiết bị văn phòng' : 'PCs, Laptops, Office equipments' },
        { id: 'licensing', label: currentLang === 'vi' ? 'Bản quyền phần mềm' : 'Software Licensing' },
        { id: 'components', label: currentLang === 'vi' ? 'Linh kiện máy tính' : 'Computer Components' },
        { id: 'network', label: currentLang === 'vi' ? 'Hạ tầng mạng & Bảo mật' : 'Network & Security' },
        { id: 'server', label: currentLang === 'vi' ? 'Máy chủ & Lưu trữ' : 'Servers & Storage' },
        { id: 'software', label: currentLang === 'vi' ? 'Phần mềm ERP/MES' : 'Enterprise Software' },
        { id: 'broadcast', label: currentLang === 'vi' ? 'Phát thanh - Truyền hình' : 'Broadcasting & AV' }
      ];
      const filtered = PRODUCTS_DATA.filter(p => {
        const matchCat = productFilter === 'all' || p.cat === productFilter;
        const matchSearch = !productSearch ||
          p.name[currentLang].toLowerCase().includes(productSearch) ||
          p.desc[currentLang].toLowerCase().includes(productSearch);
        return matchCat && matchSearch;
      });

      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="max-w-3xl mb-6">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_products')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1 mb-2">${t('products_title')}</h1>
            <p class="text-sm text-slate-600">${t('products_sub')}</p>
          </div>

          <div class="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs text-brand-navy mb-8">
            <strong>${currentLang === 'vi' ? 'Lưu ý vận hành:' : 'Catalog Note:'}</strong> ${t('products_note')}
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div class="flex flex-wrap gap-2">
              ${cats.map(c => `
                <button type="button" onclick="setProductFilter('${c.id}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition ${productFilter === c.id ? 'bg-brand-navy text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-orange'}">
                  ${c.label}
                </button>
              `).join('')}
            </div>
            <input id="prod-search-input" type="text" value="${productSearch}" oninput="onProductSearch(this.value)" placeholder="${t('search_placeholder')}" class="w-full md:w-64 px-4 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-orange focus:outline-none" />
          </div>

          ${filtered.length ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${filtered.map(p => renderProductCard(p)).join('')}
            </div>
          ` : `<div class="bg-white rounded-2xl p-10 text-center text-sm text-slate-500 border border-slate-200">${t('empty_result')}</div>`}
        </section>
      `;
    }

    function setFinanceFilter(cat) {
      financeFilter = cat;
      renderPage();
    }

    function renderFinance() {
      const cats = [
        { id: 'all', label: currentLang === 'vi' ? 'Tất cả' : 'All' },
        { id: 'risk', label: currentLang === 'vi' ? 'Quản trị vốn & Rủi ro' : 'Capital & Risk' },
        { id: 'macro', label: currentLang === 'vi' ? 'Vĩ mô & Chính sách' : 'Macro & Policy' },
        { id: 'digital', label: currentLang === 'vi' ? 'Tài chính số' : 'Digital Finance' }
      ];
      const filtered = FINANCE_ARTICLES.filter(a => financeFilter === 'all' || a.cat === financeFilter);

      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="max-w-3xl mb-8">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_finance')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1 mb-2">${t('finance_title')}</h1>
            <p class="text-sm text-slate-600">${t('finance_sub')}</p>
          </div>

          <div class="flex flex-wrap gap-2 mb-8">
            ${cats.map(c => `
              <button type="button" onclick="setFinanceFilter('${c.id}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition ${financeFilter === c.id ? 'bg-brand-orange text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-orange'}">
                ${c.label}
              </button>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${filtered.map(a => `
              <div class="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between card-hover">
                <div>
                  <div class="flex items-center justify-between text-xs mb-3">
                    <span class="px-2.5 py-1 rounded-full bg-orange-100 text-brand-orange font-bold">${a.catLabel[currentLang]}</span>
                    <span class="text-slate-400">${a.date}</span>
                  </div>
                  <h3 class="text-base font-bold text-brand-navy mb-2">${a.title[currentLang]}</h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">${a.summary[currentLang]}</p>
                </div>
                <button type="button" onclick="openArticleModal('finance','${a.id}')" class="text-left text-xs font-bold text-brand-blue hover:underline">${t('btn_read_more')} →</button>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function setNewsFilter(cat) {
      newsFilter = cat;
      renderPage();
    }

    function renderNews() {
      const cats = [
        { id: 'all', label: currentLang === 'vi' ? 'Tất cả' : 'All' },
        { id: 'policy', label: currentLang === 'vi' ? 'Chính sách & Đấu thầu' : 'Policy & Procurement' },
        { id: 'tech', label: currentLang === 'vi' ? 'Công nghệ & Chuyển đổi số' : 'Tech & Digital Transformation' }
      ];
      const filtered = NEWS_DATA.filter(n => newsFilter === 'all' || n.cat === newsFilter);

      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="max-w-3xl mb-8">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_news')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1 mb-2">${t('news_title')}</h1>
            <p class="text-sm text-slate-600">${t('news_sub')}</p>
          </div>

          <div class="flex flex-wrap gap-2 mb-8">
            ${cats.map(c => `
              <button type="button" onclick="setNewsFilter('${c.id}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition ${newsFilter === c.id ? 'bg-brand-navy text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-brand-orange'}">
                ${c.label}
              </button>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${filtered.map(n => `
              <div class="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between card-hover">
                <div>
                  <div class="flex items-center justify-between text-xs mb-3">
                    <span class="px-2.5 py-1 rounded-full bg-blue-100 text-brand-blue font-bold">${n.catLabel[currentLang]}</span>
                    <span class="text-slate-400">${n.date}</span>
                  </div>
                  <h3 class="text-base font-bold text-brand-navy mb-2">${n.title[currentLang]}</h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">${n.summary[currentLang]}</p>
                </div>
                <button type="button" onclick="openArticleModal('news','${n.id}')" class="text-left text-xs font-bold text-brand-orange hover:underline">${t('btn_read_more')} →</button>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function renderContact() {
      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="max-w-3xl mb-10">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-orange">${t('nav_contact')}</span>
            <h1 class="text-3xl font-extrabold text-brand-navy mt-1 mb-2">${t('contact_title')}</h1>
            <p class="text-sm text-slate-600">${t('contact_sub')}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-2 bg-brand-navy text-white rounded-2xl p-6 sm:p-8 space-y-5">
              <h2 class="text-lg font-bold text-brand-amber">${t('company_name_full')}</h2>
              <div class="space-y-3 text-sm">
                <p><strong class="block text-slate-400 text-xs">${currentLang === 'vi' ? 'Địa chỉ trụ sở' : 'Address'}</strong>${t('address_full')}</p>
                <p><strong class="block text-slate-400 text-xs">${t('tax_label')}</strong>0106055545</p>
                <p><strong class="block text-slate-400 text-xs">${t('phone_label')}</strong>024.3993 2122</p>
                <p><strong class="block text-slate-400 text-xs">Email</strong>giauynguyen@gmail.com</p>
                <p><strong class="block text-slate-400 text-xs">Website</strong>giauynguyen.vn</p>
              </div>
            </div>

            <form onsubmit="submitContactForm(event)" class="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1">${t('form_name')}</label>
                  <input required type="text" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1">${t('form_phone')}</label>
                  <input required type="tel" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">Email *</label>
                <input required type="email" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-orange focus:outline-none" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">${t('form_note')}</label>
                <textarea required rows="4" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-orange focus:outline-none"></textarea>
              </div>
              <button type="submit" class="px-6 py-3 rounded-xl v2b-gradient text-white font-bold text-sm shadow hover:opacity-95 transition">
                ${t('contact_send_btn')}
              </button>
            </form>
          </div>
        </section>
      `;
    }

    function renderPage() {
      const main = document.getElementById('app-main');
      if (currentPage === 'home') main.innerHTML = renderHome();
      else if (currentPage === 'about') main.innerHTML = renderAbout();
      else if (currentPage === 'services') main.innerHTML = renderServices();
      else if (currentPage === 'products') main.innerHTML = renderProducts();
      else if (currentPage === 'finance') main.innerHTML = renderFinance();
      else if (currentPage === 'news') main.innerHTML = renderNews();
      else if (currentPage === 'contact') main.innerHTML = renderContact();
    }

    window.onload = function() {
      navigateTo('home');
    };
