window.ScenarioData = {
	rawData: "",
	rawErrors: "",

	menuTree: [
	    {
	        "label": "Mở máy động cơ",
	        "action": "",
	        "children": [
	            {
	                "label": "Mở máy phi công",
	                "action": "MM_PC"
	            },
	            {
	                "label": "Mở máy ngoại trường",
	                "action": "MM_NgT"
	            },
	            {
	                "label": "Mở máy nội trường",
	                "action": "MM_NT"
	            }
	        ]
	    },
	    {
	        "label": "Xử lý bất trắc động cơ trái",
	        "action": "",
	        "children": [
	            {
	                "label": "Rô to cao áp không quay sau 5 giây",
	                "action": "PAN_01_KET_CAO_AP"
	            },
	            {
	                "label": "Rô to thấp áp không tăng khi vòng quay rô to cap áp lớn hơn 23%",
	                "action": "PAN_02_KET_THAP_AP"
	            },
	            {
	                "label": "Nhiệt độ khí cháy T4 không tăng sau 30 giây",
	                "action": "PAN_03_KO_TANG_NHIET"
	            },
	            {
	                "label": "Không có áp suất dầu nhờn sau 30 giây",
	                "action": "PAN_04_MAT_AP_SUAT_DAU"
	            },
	            {
	                "label": "Không ngắt BTC khi vòng quay rô to cao áp lớn hơn 55%",
	                "action": "PAN_05_KO_NGAT_BTC"
	            },
	            {
	                "label": "Nhiệt độ khí cháy T4 lớn hơn 700 độ C",
	                "action": "PAN_06_QUA_NHIET_700"
	            },
	            {
	                "label": "Sau 60 giây động cơ không đạt chế độ ga nhỏ",
	                "action": "PAN_07_TREO_KHOI_DONG"
	            },
	            {
	                "label": "Xuất hiện tín hiệu báo cháy động cơ",
	                "action": "PAN_08_BAO_CHAY_POJAR"
	            }
	        ]
	    },
	    {
	        "label": "Xử lý bất trắc động cơ phải",
	        "action": "",
	        "children": [
	            {
	                "label": "Rô to cao áp không quay sau 5 giây",
	                "action": "PAN_01_KET_CAO_AP_PHAI"
	            },
	            {
	                "label": "Rô to thấp áp không tăng khi vòng quay rô to cap áp lớn hơn 23%",
	                "action": "PAN_02_KET_THAP_AP_PHAI"
	            },
	            {
	                "label": "Nhiệt độ khí cháy T4 không tăng sau 30 giây",
	                "action": "PAN_03_KO_TANG_NHIET_PHAI"
	            },
	            {
	                "label": "Không có áp suất dầu nhờn sau 30 giây",
	                "action": "PAN_04_MAT_AP_SUAT_DAU_PHAI"
	            },
	            {
	                "label": "Không ngắt BTC khi vòng quay rô to cao áp lớn hơn 55%",
	                "action": "PAN_05_KO_NGAT_BTC_PHAI"
	            },
	            {
	                "label": "Nhiệt độ khí cháy T4 lớn hơn 700 độ C",
	                "action": "PAN_06_QUA_NHIET_700_PHAI"
	            },
	            {
	                "label": "Sau 60 giây động cơ không đạt chế độ ga nhỏ",
	                "action": "PAN_07_TREO_KHOI_DONG_PHAI"
	            },
	            {
	                "label": "Xuất hiện tín hiệu báo cháy động cơ",
	                "action": "PAN_08_BAO_CHAY_POJAR_PHAI"
	            }
	        ]
	    },
	    {
	        "label": "Hướng dẫn sử dụng và học tập thiết bị buồng lái",
	        "action": "",
	        "children": [
	            {
	                "label": "Giới thiệu khái quát",
	                "action": "Gioi_Thieu"
	            },
	            {
	                "label": "Khung hình КИСС ТИПОВОЙ",
	                "action": "Kiss_Tipovoi"
	            },
	            {
	                "label": "Khung hình КИСС ДВИГ",
	                "action": "Kiss_Dvig"
	            },
	            {
	                "label": "Khung hình КИСС ТОПЛ",
	                "action": "Kiss_Topl"
	            }
	        ]
	    }
	],

	lessonNames: {
		"MM_PC": "Mở máy phi công",
		"MM_NgT": "Mở máy ngoại trường",
		"MM_NT": "Mở máy nội trường",
		"PAN_01_KET_CAO_AP": "Rô to cao áp không quay sau 5 giây",
		"PAN_02_KET_THAP_AP": "Rô to thấp áp không tăng khi vòng quay rô to cap áp lớn hơn 23%",
		"PAN_03_KO_TANG_NHIET": "Nhiệt độ khí cháy T4 không tăng sau 30 giây",
		"PAN_04_MAT_AP_SUAT_DAU": "Không có áp suất dầu nhờn sau 30 giây",
		"PAN_05_KO_NGAT_BTC": "Không ngắt BTC khi vòng quay rô to cao áp lớn hơn 55%",
		"PAN_06_QUA_NHIET_700": "Nhiệt độ khí cháy T4 lớn hơn 700 độ C",
		"PAN_07_TREO_KHOI_DONG": "Sau 60 giây động cơ không đạt chế độ ga nhỏ",
		"PAN_08_BAO_CHAY_POJAR": "Xuất hiện tín hiệu báo cháy động cơ",
		"PAN_01_KET_CAO_AP_PHAI": "Rô to cao áp không quay sau 5 giây",
		"PAN_02_KET_THAP_AP_PHAI": "Rô to thấp áp không tăng khi vòng quay rô to cap áp lớn hơn 23%",
		"PAN_03_KO_TANG_NHIET_PHAI": "Nhiệt độ khí cháy T4 không tăng sau 30 giây",
		"PAN_04_MAT_AP_SUAT_DAU_PHAI": "Không có áp suất dầu nhờn sau 30 giây",
		"PAN_05_KO_NGAT_BTC_PHAI": "Không ngắt BTC khi vòng quay rô to cao áp lớn hơn 55%",
		"PAN_06_QUA_NHIET_700_PHAI": "Nhiệt độ khí cháy T4 lớn hơn 700 độ C",
		"PAN_07_TREO_KHOI_DONG_PHAI": "Sau 60 giây động cơ không đạt chế độ ga nhỏ",
		"PAN_08_BAO_CHAY_POJAR_PHAI": "Xuất hiện tín hiệu báo cháy động cơ",
		"Gioi_Thieu": "Giới thiệu khái quát",
		"Kiss_Tipovoi": "Khung hình КИСС ТИПОВОЙ",
		"Kiss_Dvig": "Khung hình КИСС ДВИГ",
		"Kiss_Topl": "Khung hình КИСС ТОПЛ"
	},

	initData: function() {
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.1 | MỞ MÁY PHI CÔNG |  |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.2 | Kiểm tra khả năng hoạt động của các hệ thống trên máy bay khi sử dụng nguồn điện sân bay: | Выполнить проверку работоспособности бортовых систем при питании от аэродромного источника энергии: |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.akum_lev.1.3 | Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | включить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.akum_prav.1.4 | Bật công tắc АККУМ ПРАВ (ẮC QUY PHẢI); | включить выключатель АККУМ ПРАВ; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.5 | Kiểm tra sự hiển thị của Màn hình chỉ thị đa năng ở cả hai buồng lái | проконтролировать индикацию на МФЦИ обеих кабин мнемокадров: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.1.6 | Trên màn hình bên trái hiển thị khung hình Kiểm tra trước khi bay ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; | на левом ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhPhai.1.7 | Trên màn hình bên phải hiển thị khung hình КИСС ТИПОВОЙ; | на правом КИСС ТИПОВОЙ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.1.8 | Trên màn hình ở giữa hiển thị khung hình КИСС СЭС; | на среднем КИСС СЭС; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.9 | Kiểm tra liên lạc vô tuyến qua thiết bị liên lạc nội bộ giữa các phi công ở buồng lái trước và buồng lái sau, với kỹ thuật trưởng máy bay và điều chỉnh âm lượng nếu cần thiết; | проверить радиосвязь по СПУ между летчиками в первой и второй кабинах, с техником самолета и при необходимости отрегулировать громкость; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.10 | Kiểm tra việc thiết lập kênh liên lạc vô tuyến với chỉ huy bay trên bảng điều khiển của СПУ; | проверить установку канала радиосвязи с руководителем полетов на объединенном пульте управления СПУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance8280.1.11 | Thực hiện tuần tự các hướng dẫn hiển thị trong cửa sổ 5 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: | выполнить последовательно инструкции, предъявляемые в окне 5 мнемокадра ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance8280.1.12 | ПРОВЕРЬ ЭКРАНЫ МФЦИ, УСТАНОВИ ЯРКОСТЬ (KIỂM TRA MÀN HÌNH МФЦИ, THIẾT LẬP ĐỘ SÁNG) | ПРОВЕРЬ ЭКРАНЫ МФЦИ,УСТАНОВИ ЯРКОСТЬ |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.kyhieuN.1.13 | Kiểm tra tình trạng hoạt động của các màn hình chỉ thị bằng sự hiện diện của biểu tượng N ở góc dưới bên phải màn hình; | проконтролировать исправность индикаторов по наличию символа N в правом нижнем углу экрана; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.kyhieuN.1.14 |  |  |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhPhai.kyhieuN.1.15 |  |  |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.16 | Thiết lập độ sáng cần thiết; | установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.17 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance36405.1.18 | ПРОВЕРЬ СЭС (KIỂM TRA HỆ THỐNG ĐIỆN) | ПРОВЕРЬ СЭС |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.1.19 | Kiểm tra điện áp nguồn điện trên khung hình КИСС СЭС | по индикации на мнемокадре СЭС проверить соответствие напряжения электропитания установленным значениям и состояние СЭС; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.20 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.1.21 | Kiểm tra sự thay đổi hiển thị trên màn hình МФЦИ ở giữa từ khung hình КИСС СЭС sang khung hình КИСС ДВИГАТЕЛЬ. | проконтролировать смену индикации на среднем МФЦИ мнемокадра КИСС СЭС на мнемокадр КИСС ДВИГАТЕЛЬ. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance36610.1.22 | ПРОВЕРЬ ЛАМПЫ САС (KIỂM TRA CÁC ĐÈN BÁO KHẨN CẤP) | ПРОВЕРЬ ЛАМПЫ САС |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.kontron_lamp.1.23 | Nhấn nút КОНТРОЛЬ ЛАМП (KIỂM TRA ĐÈN) | нажать кнопку КОНТРОЛЬ ЛАМП на правой стороне приборной доски; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.denBaoHong_Gidr.1.24 | Đánh giá độ sáng của các đèn báo khẩn cấp; | оценить свечение ламп САС; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.25 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance37068.1.26 | ПРОВЕРЬ РИ (KIỂM TRA THÔNG THOẠI) | ПРОВЕРЬ РИ |  |  | \n";
		this.rawData += "MM_PC | left_panel.ri.1.27 | Nhấn nút РИ trên bảng điều khiển đài vô tuyến; | нажать кнопку РИ на пульте управления радиостанцией; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.28 | Nghe thông báo РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН (HỆ THỐNG THÔNG THOẠI HOẠT ĐỘNG TỐT); | прослушать сообщение РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.29 | Nhấn nút ДА. | нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.30 | ПРОВЕРЬ ВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ (KIỂM TRA CHIẾU SÁNG TRONG BUỒNG LÁI) | ПРОВЕРЬВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.31 | – Thực hiện kiểm tra bằng mắt thường hệ thống chiếu sáng trong buồng lái; | – выполнить визуальную проверку внутрикабинного освещения; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.32 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance37214.1.33 | ПРОВЕРЬ ИНДИКАТОР ПУИ (KIỂM TRA MÀN HÌNH CHỈ THỊ PUI) | ПРОВЕРЬИНДИКАТОР ПУИ |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.34 | – Kiểm tra để đảm bảo trên ПУИ không có thông báo НЕТ ИНФОРМАЦИИ (KHÔNG CÓ THÔNG TIN); | – проконтролировать отсутствие на ПУИ сообщения НЕТ ИНФОРМАЦИИ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.pui.yark.1.35 | – Cài đặt độ sáng theo yêu cầu; | – установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.36 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance37347.1.37 | ПРОВЕРЬ ИНДИКАТОР ИЛС (KIỂM TRA MÀN HÌNH CHỈ THỊ KÍNH NGẮM) | ПРОВЕРЬИНДИКАТОР ИЛС |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.38 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.1.39 | Khi hoàn thành kiểm tra này, trên màn hình МФЦИ giữa, khung hình КИСС ДВИГ sẽ thay đổi thành khung hình НАЧАЛЬНЫЕ ДАННЫЕ (DỮ LIỆU BAN ĐẦU). | По окончанию выполнения данной проверки на среднем МФЦИ мнемокадр КИСС ДВИГ меняется на мнемокадр НАЧАЛЬНЫЕ ДАННЫЕ (рис. 4). |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance37492.1.40 | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕ ВКЛЮЧИ ВЫСТАВКУ БИНС УСТАНОВИ (NHẬP DỮ LIỆU BAN ĐẦU BẬT CĂN CHỈNH BINS) | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕВКЛЮЧИ ВЫСТАВКУ БИНСУСТАНОВИ |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.41 | – Nhập (kiểm tra) các dữ liệu ban đầu và dữ liệu cài đặt; | – ввести (проконтролировать) начальные и установочные данные; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.42 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.instance39747.1.43 | ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ THOÁT HIỂM) | ВЫБЕРИ РЕЖИМКАТАПУЛЬТИРОВАНИЯ |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.44 | Đồng thời với thông báo ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ trong cửa sổ số 5 sẽ hiển thị thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН hoặc КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI TRƯỚC) tùy thuộc vào vị trí của công tắc КАТАПУЛЬТИРОВАНИЕ (PHÓNG GHẾ) trên bảng điều khiển ngang bên trái của buồng lái thứ hai dựa theo số lượng thành viên phi hành đoàn. | Одновременно с сообщением ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ в окне 5 индицируется сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН или КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ в зависимости от положения переключателя КАТАПУЛЬТИРОВАНИЕ на левом горизонтальном пульте второй кабины в зависимости от количества членов экипажа. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.45 | – Để xác nhận chọn phóng ghế từ hai buồng lái (khi có hai thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong mỗi buồng lái, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН (PHÓNG GHẾ TỪ 2 BUỒNG LÁI) sẽ tắt; | для подтверждения выбора катапультирования из двух кабин (при двух членах экипажа) необходимо нажать кнопку ДА на левом МФЦИ в каждой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН погаснут; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.46 | – Để xác nhận chọn phóng ghế từ buồng lái thứ nhất (khi có một thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong buồng lái thứ nhất, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI 1) sẽ tắt. | – для подтверждения выбора катапультирования из первой кабины (при одном члене экипажа) необходимо нажать кнопку ДА на левом МФЦИ в первой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ погаснут. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.47 | КОНТРОЛЬ КСАП (KIỂM TRA HỆ THỐNG SÁT THƯƠNG HÀNG KHÔNG) | КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_PC | right_panel.congTacThanhPhai.kiem_tra_ksap.1.48 | – Nhấc nắp bảo vệ nút ấn thoát hiểm. | ‒ поднять защитную крышку КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_PC | right_panel.congTacThanhPhai.kontpksap.1.49 | – Nhấn nút КОНТРОЛЬ КСАП trên thành phải của buồng lái thứ nhất. Nếu hệ thống КСАП hoạt động tốt, hướng dẫn trong cửa sổ số 5 ВЫПОЛНИ КОНТРОЛЬ КСАП sẽ thay đổi thành thông báo ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП (MẠCH ĐIỆN КСАП TỐT – BẬT NGUỒN КСАП); | ‒ нажать переключатель КОНТРОЛЬ КСАП расположенный на правом горизонтальном пульте первой кабины. При исправности системы КСАП инструкция в окне 5 ВЫПОЛНИ КОНТРОЛЬ КСАП меняется на сообщение ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП: ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП |  |  | \n";
		this.rawData += "MM_PC | right_panel.congTacThanhPhai.cong_tac_ksap.1.50 | – Đưa công tắc bật thoát hiểm về vị trí ВКЛ (BẬT), khi đó trong cửa sổ số 5 sẽ xuất hiện một trong các thông báo sau: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг; УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг; УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг; | – установить выключатель на правом горизонтальном пульте КСАП ВКЛ–ОТКЛ в положение ВКЛ, при этом в окне 5 высвечивается одно из сообщений: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.51 |  |  |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.52 | – Đặt công tắc МАССА (TRỌNG LƯỢNG) trên ghế phóng cứu hộ vào vị trí tương ứng với trọng lượng cần thiết; | – установить переключатель МАССА на катапультном кресле в положение, соответствующее необходимому весу; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_dvig.1.53 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.54 | Để khởi động động cơ, lần lượt bật các công tắc sau: | Получив разрешение на запуск включить выключатели на правом вертикальном борту: |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.generator_lev.1.55 | – ГЕНЕРАТОР ЛЕВ (MÁY PHÁT ĐIỆN TRÁI); | ‒ ГЕНЕРАТОР ЛЕВ; |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.generator_prav.1.56 | – ГЕНЕРАТОР ПРАВ (MÁY PHÁT ĐIỆN PHẢI); | ‒ ГЕНЕРАТОР ПРАВ; |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.topl_nasos.1.57 | – ТОПЛ НАСОСЫ (BƠM NHIÊN LIỆU); | ‒ ТОПЛ НАСОСЫ; |  |  | \n";
		this.rawData += "MM_PC | nguonNangLuong.congTacNguon.kislorod_oxy.1.58 | – КИСЛОРОД (OXY). | ‒ КИСЛОРОД. |  |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_left.1.59 | Đưa tay dầu của cả hai động cơ vào vị trí Ga nhỏ. | Установить РУД обоих двигателей на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_right.1.60 |  |  | 17.7 |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.61 | Sau khi đưa tay dầu của cả 2 động cơ lên vị trí Ga nhỏ, trên màn hình МФЦИ trong cửa sổ số 1 sẽ xuất hiện các thông báo ЛЕВЫЙ К ЗАПУСКУ ГОТОВ, ПРАВЫЙ К ЗАПУСКУ ГОТОВ, và thông báo К ЗАПУСКУ ДВИГАТЕЛЕЙ НЕ ГОТОВ sẽ tắt. | После установки левого и правого РУД на упор МГ на экране МФЦИ в окне 1 появляются сообщения ЛЕВЫЙ К ЗАПУСКУ ГОТОВ, ПРАВЫЙ К ЗАПУСКУ ГОТОВ, а сообщение К ЗАПУСКУ ДВИГАТЕЛЕЙ НЕ ГОТОВ гаснет. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.small_panel_right.napAnKD_DC.1.62 | Nhấn nút ЗАПУСК НА ЗЕМЛЕ (KHỞI ĐỘNG Ở MẶT ĐẤT), lúc này quá trình khởi động ВСУ sẽ diễn ra. | Нажать кнопку ЗАПУСК НА ЗЕМЛЕ, при этом происходит запуск ВСУ. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.small_panel_right.nutAnKD_VCY_2DC.1.63 |  |  |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.1.64 | Trong quá trình khởi động ВСУ trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | В процессе запуска ВСУ на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.chedo.1.65 | – Chỉ thị dòng chữ ЗАПУСК (KHỞI ĐỘNG) phía trên đồng hồ chỉ thị các thông số của ВСУ; | – индикацию надписи ЗАПУСК над индикатором параметров ВСУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.1.66 | – Sự kích hoạt của bộ đếm thời gian khởi động ВСУ; | – включение счетчика времени запуска ВСУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.1.67 | – Sự gia tăng của vòng quay và nhiệt độ khí cháy; | – рост оборотов и температуры выходящих газов; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.1.68 | – Thời gian khởi động ВСУ (không quá 40 giây). | – время запуска ВСУ (не более 40 с). |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.1.69 | – Nhiệt độ khí cháy không được vượt quá 800 °C | При запуске ВСУ контролировать максимальную температуру выходящих газов – не должна превышать 800 °C |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.1.70 | – Vòng quay rô-to không được vượt quá 109 %. | Mаксимальные обороты ротора – не должны превышать 109 %. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.71 | Nếu vượt quá các giá trị tối đa của nhiệt độ khí cháy hoặc vòng quay rô-to trong quá trình khởi động, hãy dừng việc khởi động bằng cách nhấn nút ОСТАНОВ trên bảng điều khiển. | При превышении в процессе запуска ВСУ максимальных значений температуры выходящих газов или оборотов ротора прекратить запуск ВСУ нажатием кнопки ОСТАНОВ на панели ВСУ. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.chedo.1.72 | Khi kết thúc quá trình khởi động ВСУ, dòng chữ ЗАПУСК phía sẽ thay đổi thành dòng chữ РЕЖИМ (CHẾ ĐỘ). | По окончании запуска ВСУ надпись ЗАПУСК над индикатором параметров ВСУ меняется на надпись РЕЖИМ. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.1.74 | – Nhiệt độ khí cháy tối đa không quá 720 °C; | – максимальная температура выходящих газов не более 720 °C; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.1.75 | – Số vòng quay rô-to tối đa không quá 109 %. | – максимальные обороты ротора не более 109 %. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.76 | 15 giây sau khi ВСУ đạt đến chế độ làm việc, động cơ bên trái sẽ tự động bắt đầu khởi động. | Через 15 с после выхода ВСУ на режим автоматически начинается запуск левого двигателя. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.77 | 15 giây sau khi động cơ bên trái đạt đến chế độ Ga nhỏ, động cơ bên phải sẽ tự động bắt đầu khởi động. | Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.78 | Trong quá trình khởi động động cơ, trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | Во время запуска двигателя, на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.1.79 | – Sự kích hoạt của bộ đếm thời gian khởi động động cơ; | – включение счетчика времени запуска двигателя; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.1.80 | – Tín hiệu báo trạng thái khởi động động cơ (màu vàng); | – индикацию желтого сигнализатора работы системы запуска; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.den_VTC_Trai.1.81 | – Tín hiếu báo mở van ВТС (màu xanh da trời); | – индикацию синего сигнализатора открытия створки ВТС; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimCaoAp.1.82 | – Sự gia tăng vòng quay của rô-to áp suất cao (nРВД); | – нарастание оборотов ротора высокого давления (nРВД); |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.1.83 | – Sự gia tăng vòng quay của rô-to áp suất thấp (nРНД) khi nРВД = 20 %; | – нарастание оборотов ротора низкого давления (nРНД) при nРВД ≈ 20 %; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.ap_suat_nd_lev.1.84 | – Sự gia tăng áp suất dầu ở đầu nhờn ở cửa vào động cơ; | – увеличение давления масла на входе в двигатель; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.1.85 | – Sau 15 giây kể từ khi bắt đầu khởi động, sự gia tăng nhiệt độ khí cháy, giá trị này không được vượt quá 700 °C; | – через 15 с от начала запуска нарастание температуры выходящих газов, которая не должна превышать 700 °C; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.den_VTC_Trai.1.86 | – Sự ngắt ВТС và đóng cửa van ВТС dựa trên việc tắt đèn báo ВТС khi nРВД ≤ 55 %; | – отключение ВТС и закрытие створки ВТС по погасанию синего сигнализатора ВТС при nРВД ≤ 55 %; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.1.87 | – Thời gian khởi động động cơ tối đa, không được quá 60 giây; | – максимальное время запуска двигателя, которое должно быть не более 60 с; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.1.88 | – Việc tắt tín hiệu báo trạng thái khởi động động cơ, sau khi động cơ đạt đến chế độ ga nhỏ. | – погасание индикации желтого сигнала работы системы запуска, после выхода двигателя на режим малого газа. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhPhai.cua_hut_khi_Trai.1.89 | Kiểm tra, qua khung hình КИСС ТИПОВОЙ, việc mở cửa hút khí phía trên khi nРВД > 35 %. | Проконтролировать, по мнемокадру КИСС ТИПОВОЙ, перекладку створки воздухозаборника на верхний вход при nРВД > 35 %. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.90 | 15 giây sau khi động cơ trái đạt đến chế độ ga nhỏ, động cơ phải sẽ tự động bắt đầu khởi động. | Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.91 | Sau khi khởi động, kiểm tra các thông số hoạt động của động cơ ở chế độ ga nhỏ: | После запуска проконтролировать параметры работы двигателей на МГ: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.1.92 | – Vòng quay rô to thấp áp từ  28 đến 35 %; | – nРНД = 28-35 %; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.vongQuay_txt.1.93 | – Vòng quay rô to cao áp lớn hơn hoặc bằng 60 %; | – nРВД ≥ 60 %; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.1.94 | – Nhiệt độ khí cháy không vượt quá 700 °C; | – температура выходящих газов – не более 700 °C; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.ap_suat_nd_lev.1.95 | – Áp suất dầu không nhỏ hơn 2,0 kg/cm². | – давление масла – не менее 2,0 кг/см². |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.96 | CHÚ Ý: Dừng việc khởi động động cơ bằng cách đưa tay dầu về vị trí vào vị trí СТО, nếu trong quá trình khởi động động cơ: | ВНИМАНИЕ: Запуск двигателя прекратить постановкой РУД в положение СТОП, если в процессе запуска двигателя: |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.97 | – Rô-to áp suất cao không quay sau 5 giây kể từ khi bắt đầu khởi động; | – отсутствует раскрутка ротора высокого давления через 5 с после начала запуска; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.98 | – Rô-to áp suất thấp không quay khi vòng quay của rô-to áp suất cao từ 23 % trở lên; | – отсутствует раскрутка ротора низкого давления при оборотах ротора высокого давления 23 % и более; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.99 | – Nhiệt độ khí xả không tăng sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует рост температуры выходящих газов через 30 с после начала запуска; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.100 | – Không có áp suất dầu nhờn ở đầu vào động cơ sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует давление масла на входе в двигатель через 30 с после начала запуска; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.101 | – Khi vòng quay rô to cao áp nРВД > 55 % mà không có sự ngắt ВТС và đèn báo ВТС tiếp tục hiển thị màu xanh; | – при nРВД > 55 % нет отключения ВТС и продолжается индицироваться синим цветом сигнализатор ВТС; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.102 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – температура выходящих газов стремится превысить 700 °C; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.103 | – Sau 60 giây kể từ khi bắt đầu khởi động, động cơ vẫn chưa đạt đến chế độ ga nhỏ; | – через 60 с после начала запуска двигатель не вышел на режим малого газа; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.104 | – Xuất hiện tín hiệu báo cháy; | – срабатывание сигнализации ПОЖАР; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.105 | – Chỉ thị trong cửa sổ БАСК các thông báo liên quan đến các hỏng hóc có thể xảy ra của động cơ; | – индикация в окне БАСК сообщений связанных с возможными отказами двигателя; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.106 | – Các thông số hoạt động của động cơ không tương ứng với chế độ không tải nhỏ. | – несоответствие параметров работы двигателя режиму малого газа. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.107 | Việc khởi động lại động cơ được phép thực hiện nếu nguyên nhân dừng khởi động là: | Повторный запуск двигателя разрешается производить, если причиной прекращения запуска было: |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.108 | – Không điểm lửa được nhiên liệu trong buồng đốt; | – не воспламенение топлива в камере сгорания; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.109 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – стремление температуры выходящих газов превысить 700 °C; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.110 | Kiểm tra khả năng hoạt động của các hệ thống sau khi khởi động động cơ | Проверка работоспособности бортовых систем после запуска двигателей |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.btn_cec.1.111 | – Chuyển màn hình đa năng МФЦИ ở giữa sang khung hình hệ thống điện КИСС СЭС và kiểm tra việc kết nối máy phát của cả hai động cơ vào mạng điện trên máy bay; | – включить на среднем МФЦИ мнемокадр КИСС СЭС и проверить подключение генераторов обоих двигателей к бортовой сети; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.mayPhat_DC_Trai.1.112 |  |  |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.mayPhat_DC_Phai.1.113 |  |  |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.114 | – Ra lệnh cho kỹ thuật viên máy bay ngắt nguồn điện mặt đất | – дать команду технику самолета на отключение наземного источника электропитания и получив доклад о выполнении, убедиться в его отключении; |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.115 | Sưởi ấm động cơ ở chế độ ga nhỏ không dưới 1 phút. | Прогреть двигатели на режиме малого газа не менее 1 мин. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhPhai.dongHoVongQuayTrai.daiSuoiAmDC.1.116 | Đưa vòng quay rô to cao áp lên dải vạch màu xanh lá để sưởi ấm động cơ, trong thời gian 1,5 phút (vòng quay khoảng 85%). Khi quá trình sưởi ấm kết kết thúc, vạch màu xanh sẽ ẩn đi. | Увеличьте обороты ротора высокого давления до зеленой зоны для прогрева двигателя в течение 1,5 минут (обороты около 85%). По завершении процесса прогрева зеленая отметка исчезнет. |  |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_left.1.117 |  |  | 32.4 |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_right.1.118 |  |  | 32.4 |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_left.1.119 | Sau khi sưởi ấm động cơ, hãy đưa động cơ về chế độ ga nhỏ | После прогрева двигателя переведите его на режим малого газа. | 17.7 |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_right.1.120 |  |  | 17.7 |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.txt_kiem_tra_thuy_luc_trai.1.121 | Thực hiện kiểm tra  theo hướng dẫn được hiển thị trong cửa sổ số 5 của khung hình kiểm tra trước khi bay: | Выполнить проверку отклонения рулевых поверхностей и механизации крыла (из первой кабины) в соответствии с инструкцией, предъявляемой в окне 5 мнемокадра ППЛК: |  |  | \n";
		this.rawData += "MM_PC | cum_dieu_khien.ui_can_lai.1.122 | KIỂM TRA ĐIỀU KHIỂN CÁNH ĐUÔI NGANG (ПРОВЕРЬ УПРАВЛЕНИЕ СТАБИЛИЗАТОРОМ) - Hãy kéo, đẩy cần lái để kiểm tra. | ПРОВЕРЬ УПРАВЛЕНИЕ СТАБИЛИЗАТОРОМ - отклонить РУС от себя и на себя до упора |  |  | \n";
		this.rawData += "MM_PC | cum_dieu_khien.ui_can_lai.1.123 | KIỂM TRA ĐIỀU KHIỂN CÁNH LIỆNG (ПРОВЕРЬ УПРАВЛЕНИЕ ЭЛЕРОНАМИ) - Hãy ép cần lái sang trái, sang phải để kiểm tra. | ПРОВЕРЬ УПРАВЛЕНИЕ ЭЛЕРОНАМИ - отклонить РУС влево и вправо до упора. |  |  | \n";
		this.rawData += "MM_PC | cum_ban_dap.ban_dap_trai.1.124 | KIỂM TRA ĐIỀU KHIỂN CÁNH HƯỚNG (ПРОВЕРЬ УПРАВЛЕНИЕ РУЛЕМ НАПРАВЛЕНИЯ) - Hãy đạp bàn đạp để kiểm tra. | ПРОВЕРЬ УПРАВЛЕНИЕ РУЛЕМ НАПРАВЛЕНИЯ - отклонить педали влево и вправо до упора |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_mui_thu.1.125 | THU CÁNH MŨI (УБЕРИ НОСКИ КРЫЛА) – nhấn nút THU CÁNH CỤP (НОСКИ УБР) và kiểm tra thông qua hiển thị trên khung hình КИСС ТИПОВОЙ. | УБЕРИ НОСКИ КРЫЛА – нажать, на панели управления КСУ, кнопку НОСКИ УБР, по индикации на мнемокадре КИСС ТИПОВОЙ на правом МФЦИ и докладу техника самолета убедиться в уборке носков крыла; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_mui_tha.1.126 | THẢ CÁNH MŨI (ВЫПУСТИ НОСКИ КРЫЛА) – nhấn nút THẢ CÁNH MŨI (НОСКИ ВЫП) và kiểm tra thông qua hiển thị trên khung hình КИСС ТИПОВОЙ. | ВЫПУСТИ НОСКИ КРЫЛА – нажать кнопку НОСКИ ВЫП, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в выпуске носков крыла; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_ta_thu.1.127 | THU CÁNH TÀ (УБЕРИ ЗАКРЫЛКИ) – nhấn nút (ЗАКРЫЛКИ ПОС) trên bảng điều khiển КСУ và kiểm tra thông qua hiển thị trên khung hình КИСС ТИПОВОЙ. | УБЕРИ ЗАКРЫЛКИ – нажать, на панели управления КСУ, кнопку ЗАКРЫЛКИ ПОС, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в уборке закрылков; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_ta_ha_canh.1.128 | ĐẶT CÁNH TÀ Ở VỊ TRÍ HẠ CÁNH (УСТАНОВИ ЗАКРЫЛКИ –ПОСАДКА) – hấn nút ЗАКРЫЛКИ ПОС | УСТАНОВИ ЗАКРЫЛКИ –ПОСАДКА – нажать, на панели управления КСУ, кнопку ЗАКРЫЛКИ УБР, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в выпуске закрылков в посадочное положение; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_ta_ha_canh.1.129 | ĐẶT CÁNH TÀ Ở VỊ TRÍ CẤT CÁNH hấn nút ЗАКРЫЛКИ ПОС | УСТАНОВИ ЗАКРЫЛКИ –ВЗЛЕТ – нажать кнопку ЗАКРЫЛКИ ПОС повторно, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в перестановке закрылков во взлетное положение; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.canh_ta_ha_canh.1.130 | BẬT CHẾ ĐỘ CHÍNH CỦA HỆ THỐNG ĐIỀU KHIỂN BAY (ВКЛЮЧИ ОСН КСУ) – đảm bảo chế độ điều khiển chính của КСУ đã được bật thông qua việc nút CHẾ ĐỘ CHÍNH (ОСН РЕЖ) trên bảng điều khiển КСУ sáng màu xanh lá cây. Nếu chế độ chính chưa được bật – hãy nhấn nút ОСН РЕЖ, sau đó đảm bảo rằng nút sáng màu xanh lá cây; | ВКЛЮЧИ ОСН КСУ – убедиться во включении основного режима управления КСУ по подсвечиванию кнопки ОСН РЕЖ на пульте управления КСУ зеленым цветом. Если основной режим не включен – нажать кнопку ОСН РЕЖ, после чего убедиться, что кнопка подсвечивается зеленым цветом; |  |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_right.tam_giam_toc.1.131 | THẢ TẤM GIẢM TỐC (ВЫПУСТИ ТЩ) – nhấn và giữ nút ТЩ trên tay dầu (РУД), thông qua hiển thị trên khung hình Tiêu chuẩn và báo cáo của kỹ thuật viên máy bay để đảm bảo phanh khí động đã được mở; | ВЫПУСТИ ТЩ – нажать и удерживать в нажатом положении кнопку ТЩ на РУД, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в выпуске тормозного щитка; |  |  | \n";
		this.rawData += "MM_PC | rud_LeftRight.rud_right.tam_giam_toc.1.132 | THU TẤM GIẢM TỐC (УБЕРИ ТЩ) – nhả nút ТЩ trên cần ga và kiểm tra thông qua hiển thị trên khung hình КИСС ТИПОВОЙ. | УБЕРИ ТЩ – отпустить кнопку ТЩ на РУД, по индикации на мнемокадре КИСС ТИПОВОЙ и докладу техника самолета убедиться в уборке тормозного щитка. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.yvod.1.133 | BẬT HỆ THỐNG TỰ ĐỘNG THOÁT LY? (АВТ УВОД ДОЛЖЕН БЫТЬ ВКЛЮЧЕН?) Ấn nút УВОД | АВТ УВОД ДОЛЖЕН БЫТЬ ВКЛЮЧЕН? – если полетным заданием предусмотрено использование данного режима нажать кнопку ДА кнопочного обрамления МФЦИ, при этом инструкция АВТ УВОД ДОЛЖЕН БЫТЬ ВКЛЮЧЕН? меняется на инструкцию ВКЛЮЧИ АВТ УВОД; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_topl.1.134 | BẬT TỰ ĐỘNG THOÁT LY (ВКЛЮЧИ АВТ УВОД) – nhấn nút THOÁT LY (УВОД) trên bảng điều khiển КСУ, khi đó đèn nút sẽ sáng màu xanh lá cây; Ấn nút НЕТ | ВКЛЮЧИ АВТ УВОД – нажать кнопку УВОД на пульте управления КСУ, при этом включится подсвет кнопки зеленым цветом; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.yvod.1.135 | TẮT TỰ ĐỘNG THOÁT LY (ОТКЛЮЧИ АВТ УВОД) – nhấn nút УВОД trên bảng điều khiển КСУ, khi đó đèn nút sẽ sáng màu đỏ. | ОТКЛЮЧИ АВТ УВОД – нажать кнопку УВОД на пульте управления КСУ, при этом включится подсвет кнопки красным цветом. |  |  | \n";
		this.rawData += "MM_PC | cum_dieu_khien.ui_can_lai.phanh.1.136 | ĐỂ BÀN ĐẠP Ở VỊ TRÍ TRUNG LẬP – BẬT PHANH KHỞI HÀNH (ПЕДАЛИ НЕЙТРАЛЬНО – ВКЛЮЧИ СТАРТОВОЕ ТОРМОЖЕНИЕ) – Bóp phanh lấy đà trên cần lái. | ПЕДАЛИ НЕЙТРАЛЬНО – ВКЛЮЧИ СТАРТОВОЕ ТОРМОЖЕНИЕ – снять ограничительный упор и зажать гашетку тормозов на РУС полностью на время не менее 2 с. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhPhai.ap_suat_phanh_1.1.137 | Kiểm tra xem áp suất trong phanh bánh xe có đạt 70+10 at không | Проконтролировать наличие давления 70+10 кгс/см2 в тормозах колес и отпустить гашетку. На МФЦИ второй кабины, в течении проверки, в поле БАСК индицируется сообщение КОНТРОЛИРУЕТСЯ СТАРТ ТОРМОЖ ИЗ 1-ОЙ КАБ; |  |  | \n";
		this.rawData += "MM_PC | cum_dieu_khien.ui_can_lai.phanh.1.138 | NHẢ PHANH (ОТПУСТИ ТОРМОЗА) – nhả cò phanh. Kiểm tra xem áp suất phanh đỗ trong phanh bánh xe có duy trì ở mức 40+10 kg/cm2 không. | ОТПУСТИ ТОРМОЗА – отпустить гашетку тормозов. Проконтролировать наличие стояночного давления 40+10 кгс/см2 в тормозах колес. |  |  | \n";
		this.rawData += "MM_PC | right_panel.phanh_do.1.139 | TẮT PHANH ĐỖ (ОТКЛЮЧИ СТОЯНОЧНЫЙ ТОРМОЗ) – để tắt, dùng tay phải nắm lấy tay cầm phanh đỗ trên bảng điều khiển ngang bên phải, kéo lên trên và xoay sang phải theo chiều kim đồng hồ 90 độ. Thông qua hiển thị trên khung hình Tiêu chuẩn, hãy kiểm tra đảm bảo không còn áp suất trong phanh bánh xe. | ОТКЛЮЧИ СТОЯНОЧНЫЙ ТОРМОЗ – для отключения взяться правой рукой за рукоятку стояночного тормоза на правом горизонтальном пульте, вытянуть ее вверх и повернуть вправо по часовой стрелке на 900. По индикации на мнемокадре КИСС ТИПОВОЙ проконтролировать отсутствие давления в тормозах колес. |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhGiua.btn_kcy.1.140 | Thực hiện kiểm tra khả năng hoạt động của hệ thống КСУ, bằng cách, nhấn nút КСУ trên МФЦИ ở giữa để chuyển sang khung hình КИСС КСУ; | 10. Выполнить контроль работоспособности КСУ, для чего: - нажатием кнопки КСУ на среднем МФЦИ перейти на мнемокадр КИСС КСУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_avtk.1.141 | – nhấn nút АВТК trên khung hình kiểm tra trước khi bay để chuyển sang khung hình АВТК; | – нажатием кнопки АВТК на мнемокадре ППЛК перейти на мнемокадр АВТК (рис. 6); |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_kcy.1.142 | – dùng các nút mũi tên dể di chuyển cho trỏ đến vị trí КСУ; | С помощью клавиш со стрелками переместите курсор в положение КСУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_kcy.1.143 |  |  |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_czo.1.144 | – nhấn nút ЗАПР để chuyển sang khung hình KIỂM TRA КСУ (КОНТРОЛЬ КСУ); | – нажать кнопку ЗАПР для перехода на мнемокадр КОНТРОЛЬ КСУ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.txt_thong_bao_trai.1.145 | – thực hiện các hướng dẫn trong cửa sổ số 5 của khung hình KIỂM TRA КСУ: | – выполнить инструкции в окне 5 мнемокадра КОНТРОЛЬ КСУ: |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.btn_topl.1.146 | ‒ CÓ NGƯỜI TRONG KHU VỰC LÀM VIỆC KHÔNG? (ЛЮДИ ПРИСУТСТВУЮТ В ЗОНЕ ПРОВЕДЕНИЯ РАБОТ?) – quan sát bằng mắt để đảm bảo không có người trong khu vực dịch chuyển của các bề mặt điều khiển bay, cảnh báo cho kỹ thuật viên máy bay về việc bật kiểm tra КСУ và nhấn nút (НЕТ); | ‒ ЛЮДИ ПРИСУТСТВУЮТ В ЗОНЕ ПРОВЕДЕНИЯ РАБОТ? – визуально убедиться в отсутствии людей в зоне отклонения рулевых поверхностей, предупредить техника самолета о включении теста КСУ и нажать кнопку НЕТ; |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.manHinhTrai.test_kcy.1.147 | Nhấn nút TECT để bắt đầu kiểm tra. Quá trình kiểm tra kéo dài tối đa 3 phút. Trong lúc test, hệ thống có thể phát ra các cảnh báo lỗi hoặc giọng nói. Khi thời gian đếm ngược kết thúc (ẩn bộ đếm), phải đảm bảo màn hình hiện dòng chữ \"КСУ ИСПРАВНА\" (КСУ hoạt động bình thường) | Нажмите кнопку ТЕСТ для начала проверки. Процесс проверки длится не более 3 минут. Во время тестирования система может выдавать предупреждения об ошибках или голосовые сообщения. По окончании обратного отсчета (когда счетчик времени исчезнет), убедитесь, что на экране появилось сообщение «КСУ ИСПРАВНА» (КСУ работает нормально). |  |  | \n";
		this.rawData += "MM_PC | manHinhChinh.bang_phai.mrk_xoay_banh_mui.1.148 | BẬT HỆ THỐNG ĐIỀU KHIỂN BÁNH MŨI (ВКЛЮЧИ МРК) – МФЦИ ở giữa sẽ chuyển sang hiển thị khung hình THỦY LỰC (ГИДР); – nhấn nút МРК trên bảng điều khiển bên trái, kiểm tra xem đèn nút đã sáng màu xanh lá cây chưa và bằng cách đạp bàn đạp, hãy đảm bảo hệ thống МРК hoạt động bình thường. | ВКЛЮЧИ МРК – средний МФЦИ переключается на индикацию мнемокадра ГИДР; – нажать на левом боковом пульте кнопку МРК, проконтролировать включение подсветка кнопки зеленым цветом и отклонением педалей убедиться в работоспособности МРК. |  |  | \n";
		this.rawData += "MM_PC | mc_Subtitle.nextG.1.149 | Sau khi hoàn thành các bước kiểm tra như trên, máy bay đã sẵn sàng lăn ra đường băng | После выполнения вышеуказанных проверок самолет готов к выруливанию на взлетно-посадочную полосу |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.1 | MỞ MÁY NGOẠI TRƯỜNG | ЗАПУСК НА АЭРОДРОМЕ |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.2 | Kiểm tra khả năng hoạt động của các hệ thống trên máy bay khi sử dụng nguồn điện sân bay: | Выполнить проверку работоспособности бортовых систем при питании от аэродромного источника энергии: |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.akum_lev.2.3 | Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | включить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.akum_prav.2.4 | Bật công tắc АККУМ ПРАВ (ẮC QUY PHẢI); | включить выключатель АККУМ ПРАВ; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.5 | Kiểm tra sự hiển thị của Màn hình chỉ thị đa năng ở cả hai buồng lái | проконтролировать индикацию на МФЦИ обеих кабин мнемокадров: |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.2.6 | Trên màn hình bên trái hiển thị khung hình Kiểm tra trước khi bay ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; | на левом ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.2.7 | Trên màn hình bên phải hiển thị khung hình КИСС ТИПОВОЙ; | на правом КИСС ТИПОВОЙ; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.8 | Trên màn hình ở giữa hiển thị khung hình КИСС СЭС; | на среднем КИСС СЭС; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_avtk.2.9 | Kiểm tra tự động tình trạng hoạt động của ВСУ và các động cơ | Автономный контроль работоспособности ВСУ и двигателей |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.10 | Di chuyển con trỏ đến dòng ВСУ | Установить курсор на строку ВСУ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.11 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.12 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.13 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.14 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.15 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.16 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.17 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.18 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.19 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.20 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.21 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.22 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.23 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.24 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của ВСУ | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля ВСУ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.txt_bcy.2.25 | Nếu tình trạng của ВСУ tốt thì sẽ xuất hiện thông báo ВСУ исправна | При исправности ВСУ появится сообщение ВСУ исправна |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_vuxd.2.26 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.27 | Di chuyển con trỏ chuột đến vị trí СУ лев để điểm tra động cơ trái | Установить курсор на позицию СУ лев для проверки левого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.28 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của động cơ trái | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля левого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.txt_cy_lev.2.29 | Nếu tình trạng của động cơ trái tốt thì sẽ xuất hiện thông báo САУ СУ л исправна | При исправности левого двигателя появится сообщение САУ СУ л исправна |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_vuxd.2.30 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.31 | Di chuyển con trỏ chuột đến vị trí СУ лев để điểm tra động cơ phải | Установить курсор на позицию СУ прав для проверки правого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.32 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của động cơ phải | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля правого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.txt_cy_prav.2.33 | Nếu tình trạng của động cơ trái tốt thì sẽ xuất hiện thông báo САУ СУ пр исправна | При исправности правого двигателя появится сообщение САУ СУ пр исправна |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_vuxd.2.34 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_bask.2.35 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance47280.2.36 | Thực hiện tuần tự các hướng dẫn hiển thị trong cửa sổ 5 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: | выполнить последовательно инструкции, предъявляемые в окне 5 мнемокадра ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance47280.2.37 | ПРОВЕРЬ ЭКРАНЫ МФЦИ, УСТАНОВИ ЯРКОСТЬ (KIỂM TRA MÀN HÌNH МФЦИ, THIẾT LẬP ĐỘ SÁNG) | ПРОВЕРЬ ЭКРАНЫ МФЦИ,УСТАНОВИ ЯРКОСТЬ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.kyhieuN.2.38 | Kiểm tra tình trạng hoạt động của các màn hình chỉ thị bằng sự hiện diện của biểu tượng N ở góc dưới bên phải màn hình; | проконтролировать исправность индикаторов по наличию символа N в правом нижнем углу экрана; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.kyhieuN.2.39 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.kyhieuN.2.40 |  |  |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.41 | Thiết lập độ sáng cần thiết; | установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.42 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance48303.2.43 | ПРОВЕРЬ СЭС (KIỂM TRA HỆ THỐNG ĐIỆN) | ПРОВЕРЬ СЭС |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.44 | Kiểm tra điện áp nguồn điện trên khung hình КИСС СЭС | по индикации на мнемокадре СЭС проверить соответствие напряжения электропитания установленным значениям и состояние СЭС; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.45 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.46 | Kiểm tra sự thay đổi hiển thị trên màn hình МФЦИ ở giữa từ khung hình КИСС СЭС sang khung hình КИСС ДВИГАТЕЛЬ. | проконтролировать смену индикации на среднем МФЦИ мнемокадра КИСС СЭС на мнемокадр КИСС ДВИГАТЕЛЬ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance48532.2.47 | ПРОВЕРЬ ЛАМПЫ САС (KIỂM TRA CÁC ĐÈN BÁO KHẨN CẤP) | ПРОВЕРЬ ЛАМПЫ САС |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.kontron_lamp.2.48 | Nhấn nút КОНТРОЛЬ ЛАМП (KIỂM TRA ĐÈN) | нажать кнопку КОНТРОЛЬ ЛАМП на правой стороне приборной доски; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.denBaoHong_Gidr.2.49 | Đánh giá độ sáng của các đèn báo khẩn cấp; | оценить свечение ламп САС; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.denBaoHong_CDY.2.50 | Đèn báo hỏng hệ thông điều khiển | Светосигнализатор отказа системы управления |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.pajar_kran_prav.2.51 | Đèn báo cháy động cơ phải | Табло пожара правого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.pajar_kran_lev.2.52 | Đèn báo cháy động cơ trái | Табло пожара левого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.denBaoHongTapTrung.2.53 | Đèn báo hỏng tập trung | Централизованный разовый отказ (ЦРО) |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.54 | Nếu tốt, nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance49446.2.55 | ПРОВЕРЬ РИ (KIỂM TRA THÔNG THOẠI) | ПРОВЕРЬ РИ |  |  | \n";
		this.rawData += "MM_NgT | left_panel.ri.2.56 | Nhấn nút РИ trên bảng điều khiển đài vô tuyến; | нажать кнопку РИ на пульте управления радиостанцией; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.57 | Nghe thông báo РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН (HỆ THỐNG THÔNG THOẠI HOẠT ĐỘNG TỐT); Nhấn nút ДА. | прослушать сообщение РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance49639.2.58 | ПРОВЕРЬ ВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ (KIỂM TRA CHIẾU SÁNG TRONG BUỒNG LÁI) | ПРОВЕРЬВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.59 | – Thực hiện kiểm tra bằng mắt thường hệ thống chiếu sáng trong buồng lái; Nhấn nút ДА. | – выполнить визуальную проверку внутрикабинного освещения; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance49796.2.60 | ПРОВЕРЬ ИНДИКАТОР ПУИ (KIỂM TRA MÀN HÌNH CHỈ THỊ PUI) | ПРОВЕРЬИНДИКАТОР ПУИ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.pui.2.61 | – Kiểm tra để đảm bảo trên ПУИ không có thông báo НЕТ ИНФОРМАЦИИ (KHÔNG CÓ THÔNG TIN); | – проконтролировать отсутствие на ПУИ сообщения НЕТ ИНФОРМАЦИИ; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.pui.yark.2.62 | – Cài đặt độ sáng theo yêu cầu; | – установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.63 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance50013.2.64 | ПРОВЕРЬ ИНДИКАТОР ИЛС (KIỂM TRA MÀN HÌNH CHỈ THỊ KÍNH NGẮM) | ПРОВЕРЬИНДИКАТОР ИЛС |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.65 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.66 | Khi hoàn thành kiểm tra này, trên màn hình МФЦИ giữa, khung hình КИСС ДВИГ sẽ thay đổi thành khung hình НАЧАЛЬНЫЕ ДАННЫЕ (DỮ LIỆU BAN ĐẦU). | По окончанию выполнения данной проверки на среднем МФЦИ мнемокадр КИСС ДВИГ меняется на мнемокадр НАЧАЛЬНЫЕ ДАННЫЕ (рис. 4). |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance50218.2.67 | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕ ВКЛЮЧИ ВЫСТАВКУ БИНС УСТАНОВИ (NHẬP DỮ LIỆU BAN ĐẦU BẬT CĂN CHỈNH BINS) | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕВКЛЮЧИ ВЫСТАВКУ БИНСУСТАНОВИ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.68 | – Nhập (kiểm tra) các dữ liệu ban đầu và dữ liệu cài đặt; Nhấn nút ДА. | – ввести (проконтролировать) начальные и установочные данные; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance52584.2.69 | ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ THOÁT HIỂM) | 10. ВЫБЕРИ РЕЖИМКАТАПУЛЬТИРОВАНИЯ |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.70 | Đồng thời với thông báo ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ trong cửa sổ số 5 sẽ hiển thị thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ ДВУХ КАБИН hoặc КАТАПУЛЬТИРОВАНИЕ ИЗ ПЕРВОЙ КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI TRƯỚC) tùy thuộc vào vị trí của công tắc КАТАПУЛЬТИРОВАНИЕ (PHÓNG GHẾ) trên bảng điều khiển ngang bên trái của buồng lái thứ hai dựa theo số lượng thành viên phi hành đoàn. | Одновременно с сообщением ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ в окне 5 индицируется сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ ДВУХ КАБИН или КАТАПУЛЬТИРОВАНИЕ ИЗ ПЕРВОЙ КАБИНЫ в зависимости от положения переключателя КАТАПУЛЬТИРОВАНИЕ на левом горизонтальном пульте второй кабины в зависимости от количества членов экипажа. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.71 | – Để xác nhận chọn phóng ghế từ hai buồng lái (khi có hai thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong mỗi buồng lái, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН (PHÓNG GHẾ TỪ 2 BUỒNG LÁI) sẽ tắt; | для подтверждения выбора катапультирования из двух кабин (при двух членах экипажа) необходимо нажать кнопку ДА на левом МФЦИ в каждой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН погаснут; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.72 | – Để xác nhận chọn phóng ghế từ buồng lái thứ nhất (khi có một thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong buồng lái thứ nhất, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI 1) sẽ tắt. | – для подтверждения выбора катапультирования из первой кабины (при одном члене экипажа) необходимо нажать кнопку ДА на левом МФЦИ в первой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ погаснут. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.instance53006.2.73 | КОНТРОЛЬ КСАП (KIỂM TRA HỆ THỐNG SÁT THƯƠNG HÀNG KHÔNG) | КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_NgT | right_panel.congTacThanhPhai.kiem_tra_ksap.2.74 | – Nhấc nắp bảo vệ nút ấn thoát hiểm. | ‒ поднять защитную крышку КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_NgT | right_panel.congTacThanhPhai.kontpksap.2.75 | – Nhấn nút КОНТРОЛЬ КСАП trên thành phải của buồng lái thứ nhất. Nếu hệ thống КСАП hoạt động tốt, hướng dẫn trong cửa sổ số 5 ВЫПОЛНИ КОНТРОЛЬ КСАП sẽ thay đổi thành thông báo ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП (MẠCH ĐIỆN КСАП TỐT – BẬT NGUỒN КСАП); | ‒ нажать переключатель КОНТРОЛЬ КСАП расположенный на правом горизонтальном пульте первой кабины. При исправности системы КСАП инструкция в окне 5 ВЫПОЛНИ КОНТРОЛЬ КСАП меняется на сообщение ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП: ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП |  |  | \n";
		this.rawData += "MM_NgT | right_panel.congTacThanhPhai.cong_tac_ksap.2.76 | – Đưa công tắc bật thoát hiểm về vị trí ВКЛ (BẬT), khi đó trong cửa sổ số 5 sẽ xuất hiện một trong các thông báo sau: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг; УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг; УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг; | – установить выключатель на правом горизонтальном пульте КСАП ВКЛ–ОТКЛ в положение ВКЛ, при этом в окне 5 высвечивается одно из сообщений: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_dvig.2.77 |  |  |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.78 | – Đặt công tắc МАССА (TRỌNG LƯỢNG) trên ghế phóng cứu hộ vào vị trí tương ứng với trọng lượng cần thiết; | – установить переключатель МАССА на катапультном кресле в положение, соответствующее необходимому весу; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.79 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.80 | Để khởi động động cơ, lần lượt bật các công tắc sau: | Получив разрешение на запуск включить выключатели на правом вертикальном борту: |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.topl_nasos.2.81 | – ТОПЛ НАСОСЫ (BƠM NHIÊN LIỆU); | ‒ ТОПЛ НАСОСЫ; |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.kislorod_oxy.2.82 | – КИСЛОРОД (OXY). | ‒ КИСЛОРОД. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.small_panel_right.napAnKD_VCY.2.83 | Mở nắp đậy | Открыть крышку |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.small_panel_right.nutAnKD_VCY.2.84 | Ấn ntus khởi động ВСУ | Нажать кнопку запуска ВСУ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.85 | Trong quá trình khởi động ВСУ trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | В процессе запуска ВСУ на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.chedo.2.86 | – Chỉ thị dòng chữ ЗАПУСК (KHỞI ĐỘNG) phía trên đồng hồ chỉ thị các thông số của ВСУ; | – индикацию надписи ЗАПУСК над индикатором параметров ВСУ; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.2.87 | – Sự kích hoạt của bộ đếm thời gian khởi động ВСУ; | – включение счетчика времени запуска ВСУ; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.2.88 | – Sự gia tăng của vòng quay và nhiệt độ khí cháy; | – рост оборотов и температуры выходящих газов; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.2.89 | – Thời gian khởi động ВСУ (không quá 40 giây). | – время запуска ВСУ (не более 40 с). |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.2.90 | – Nhiệt độ khí cháy không được vượt quá 800 °C | При запуске ВСУ контролировать максимальную температуру выходящих газов – не должна превышать 800 °C |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.2.91 | – Vòng quay rô-to không được vượt quá 109 %. | Mаксимальные обороты ротора – не должны превышать 109 %. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.92 | Nếu vượt quá các giá trị tối đa của nhiệt độ khí cháy hoặc vòng quay rô-to trong quá trình khởi động, hãy dừng việc khởi động bằng cách nhấn nút ОСТАНОВ trên bảng điều khiển. | При превышении в процессе запуска ВСУ максимальных значений температуры выходящих газов или оборотов ротора прекратить запуск ВСУ нажатием кнопки ОСТАНОВ на панели ВСУ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.chedo.2.93 | Khi kết thúc quá trình khởi động ВСУ, dòng chữ ЗАПУСК phía sẽ thay đổi thành dòng chữ РЕЖИМ (CHẾ ĐỘ). | По окончании запуска ВСУ надпись ЗАПУСК над индикатором параметров ВСУ меняется на надпись РЕЖИМ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.2.95 | – Nhiệt độ khí cháy tối đa không quá 720 °C; | – максимальная температура выходящих газов не более 720 °C; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.2.96 | – Số vòng quay rô-to tối đa không quá 109 %. | – максимальные обороты ротора не более 109 %. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_avtk.2.97 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.98 | Di chuyển con trỏ đến dòng ВСУ | Установить курсор на строку ВСУ |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.99 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.100 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.101 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.102 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.103 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.104 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.105 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.106 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.107 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.108 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.109 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.110 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.111 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.112 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của ВСУ | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля ВСУ |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_vcy.2.113 | Bật máy phát điện của ВСУ | Включить генератор ВСУ |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.114 | Tiến hành khởi động lần lượt từng động cơ | Поочередно произвести запуск двигателей |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_left.2.115 | Đưa tay dầu của động cơ trái lên vị trí Ga nhỏ. | Установить РУД левый двигатель на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.small_panel_right.napAnKD_DC.2.116 | Nhấn nút ЗАПУСК НА ЗЕМЛЕ (KHỞI ĐỘNG Ở MẶT ĐẤT), lúc này quá trình khởi động động cơ sẽ diễn ra. | Нажать кнопку ЗАПУСК НА ЗЕМЛЕ, при этом произойдет запуск двигателя. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.2.117 | Trong quá trình khởi động động cơ, trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | Во время запуска двигателя, на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.2.118 | – Sự kích hoạt của bộ đếm thời gian khởi động động cơ; | – включение счетчика времени запуска двигателя; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.2.119 | – Tín hiệu báo trạng thái khởi động động cơ (màu vàng); | – индикацию желтого сигнализатора работы системы запуска; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.den_VTC_Trai.2.120 | – Tín hiếu báo mở van ВТС (màu xanh da trời); | – индикацию синего сигнализатора открытия створки ВТС; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimCaoAp.2.121 | – Sự gia tăng vòng quay của rô-to áp suất cao (nРВД); | – нарастание оборотов ротора высокого давления (nРВД); |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.2.122 | – Sự gia tăng vòng quay của rô-to áp suất thấp (nРНД) khi nРВД = 20 %; | – нарастание оборотов ротора низкого давления (nРНД) при nРВД ≈ 20 %; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.ap_suat_nd_lev.2.123 | – Sự gia tăng áp suất dầu ở đầu nhờn ở cửa vào động cơ; | – увеличение давления масла на входе в двигатель; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.2.124 | – Sau 15 giây kể từ khi bắt đầu khởi động, sự gia tăng nhiệt độ khí cháy, giá trị này không được vượt quá 700 °C; | – через 15 с от начала запуска нарастание температуры выходящих газов, которая не должна превышать 700 °C; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.den_VTC_Trai.2.125 | – Sự ngắt ВТС và đóng cửa van ВТС dựa trên việc tắt đèn báo ВТС khi nРВД ≤ 55 %; | – отключение ВТС и закрытие створки ВТС по погасанию синего сигнализатора ВТС при nРВД ≤ 55 %; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.2.126 | – Thời gian khởi động động cơ tối đa, không được quá 60 giây; | – максимальное время запуска двигателя, которое должно быть не более 60 с; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.2.127 | – Việc tắt tín hiệu báo trạng thái khởi động động cơ, sau khi động cơ đạt đến chế độ ga nhỏ. | – погасание индикации желтого сигнала работы системы запуска, после выхода двигателя на режим малого газа. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.cua_hut_khi_Trai.2.128 | Kiểm tra, qua khung hình КИСС ТИПОВОЙ, việc mở cửa hút khí phía trên khi nРВД > 35 %. | Проконтролировать, по мнемокадру КИСС ТИПОВОЙ, перекладку створки воздухозаборника на верхний вход при nРВД > 35 %. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.129 | 15 giây sau khi động cơ trái đạt đến chế độ ga nhỏ, động cơ phải sẽ tự động bắt đầu khởi động. | Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.130 | Sau khi khởi động, kiểm tra các thông số hoạt động của động cơ ở chế độ ga nhỏ: | После запуска проконтролировать параметры работы двигателей на МГ: |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.2.131 | – Vòng quay rô to thấp áp nРНД = 28…35 %; | – nРНД = 28…35 %; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.vongQuay_txt.2.132 | – Vòng quay rô to cao áp nРВД ≥ 60 %; | – nРВД ≥ 60 %; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.2.133 | – Nhiệt độ khí cháy không vượt quá 700 °C; | – температура выходящих газов – не более 700 °C; |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.ap_suat_nd_lev.2.134 | – Áp suất dầu không nhỏ hơn 2,0 kg/cm². | – давление масла – не менее 2,0 кг/см². |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.135 | CHÚ Ý: Dừng việc khởi động động cơ bằng cách đưa tay dầu về vị trí vào vị trí СТО, nếu trong quá trình khởi động động cơ: | ВНИМАНИЕ: Запуск двигателя прекратить постановкой РУД в положение СТОП, если в процессе запуска двигателя: |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.136 | – Rô-to áp suất cao không quay sau 5 giây kể từ khi bắt đầu khởi động; | – отсутствует раскрутка ротора высокого давления через 5 с после начала запуска; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.137 | – Rô-to áp suất thấp không quay khi vòng quay của rô-to áp suất cao từ 23 % trở lên; | – отсутствует раскрутка ротора низкого давления при оборотах ротора высокого давления 23 % и более; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.138 | – Nhiệt độ khí xả không tăng sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует рост температуры выходящих газов через 30 с после начала запуска; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.139 | – Không có áp suất dầu nhờn ở đầu vào động cơ sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует давление масла на входе в двигатель через 30 с после начала запуска; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.140 | – Khi vòng quay rô to cao áp nРВД > 55 % mà không có sự ngắt ВТС và đèn báo ВТС tiếp tục hiển thị màu xanh; | – при nРВД > 55 % нет отключения ВТС и продолжается индицироваться синим цветом сигнализатор ВТС; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.141 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – температура выходящих газов стремится превысить 700 °C; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.142 | – Sau 60 giây kể từ khi bắt đầu khởi động, động cơ vẫn chưa đạt đến chế độ ga nhỏ; | – через 60 с после начала запуска двигатель не вышел на режим малого газа; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.143 | – Xuất hiện tín hiệu báo cháy; | – срабатывание сигнализации ПОЖАР; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.144 | – Chỉ thị trong cửa sổ БАСК các thông báo liên quan đến các hỏng hóc có thể xảy ra của động cơ; | – индикация в окне БАСК сообщений связанных с возможными отказами двигателя; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.145 | – Các thông số hoạt động của động cơ không tương ứng với chế độ không tải nhỏ. | – несоответствие параметров работы двигателя режиму малого газа. |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.146 | Việc khởi động lại động cơ được phép thực hiện nếu nguyên nhân dừng khởi động là: | Повторный запуск двигателя разрешается производить, если причиной прекращения запуска было: |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.147 | – Không điểm lửa được nhiên liệu trong buồng đốt; | – не воспламенение топлива в камере сгорания; |  |  | \n";
		this.rawData += "MM_NgT | mc_Subtitle.nextG.2.148 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – стремление температуры выходящих газов превысить 700 °C; |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_lev.2.149 | Bật máy phát điện của động cơ trái | Включить генератор левого двигателя |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_right.2.150 | Tương tự như vậy, tiến hành khởi động động cơ phải. Đưa tay dầu của động cơ phải lên vị trí Ga nhỏ. | Аналогично произвести запуск правого двигателя. Установить РУД правого двигателя на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.small_panel_right.nutAnKD_DC.2.151 | Nhấn nút ЗАПУСК НА ЗЕМЛЕ (KHỞI ĐỘNG Ở MẶT ĐẤT), lúc này quá trình khởi động động cơ sẽ diễn ra. Quá trình kiểm tra, kiểm soát động cơ thực hiện tương tự như đối với động cơ trái. | Нажать кнопку ЗАПУСК НА ЗЕМЛЕ, при этом произойдет запуск двигателя. Контроль параметров работы двигателя осуществлять аналогично левому двигателю. |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_prav.2.152 | Sau khi động cơ phải khởi động thành công, tiến hành bật máy phát điện của động cơ phải | После успешного запуска правого двигателя включить генератор правого двигателя. |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_vcy.2.153 | Sau khi khởi động thành công 2 động cơ, tiến hành tắt máy phát của ВСУ, để động cơ hoạt động ở chế độ không tải 1 phút. Sau đó tiến hành tắt máy ВСУ. | После успешного запуска обоих двигателей выключить генератор ВСУ, дать двигателям поработать на режиме малого газа (МГ) 1 минуту. Затем выключить ВСУ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.small_panel_right.nutTatMay_VCY.2.154 | Tắt máy ВСУ | Выключить ВСУ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_bask.2.155 | Ghi các tham số hoạt động của động cơ ở chế độ Ga nhỏ | Записать параметры работы двигателей на режиме МГ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_avtk.2.156 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.157 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.158 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.159 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.160 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.161 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.162 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.163 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.164 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.165 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.166 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.167 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.168 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.169 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.170 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_kcy.2.171 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.172 | Ghi tham số của động cơ trái | Записать параметры левого двигателя |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_gidr.2.173 | Ghi tham số của động cơ phải | Записать параметры правого двигателя |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_left.2.174 | Sưởi ấm động cơ trái ở chế độ 0,3 max (dải màu xanh). Thời gian sưởi ấm động cơ không nhỏ hơn 1,5 phút | Прогреть левый двигатель на режиме 0,3 макс (синяя полоса). Время прогрева двигателя должно быть не менее 1,5 мин. | 32.4 |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.daiSuoiAmDC.2.175 | Khi quá trình sưởi ấm kết thúc, dải màu xanh sẽ ẩn đi. | По окончании прогрева синяя полоса исчезнет. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_lev.2.176 | Ghi tham số của động cơ trái ở chế độ 0,3 max | Записать параметры левого двигателя на режиме 0,3 макс. |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_left.2.177 | Đưa tay dầu của động cơ trái về vị trí ga nhỏ | Установить РУД левого двигателя на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_right.2.178 | Tương tự như vậy, tiến hành sưởi ấm động cơ phải | Аналогично произвести прогрев правого двигателя. | 32.4 |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhGiua.dongHoVongQuayPhai.daiSuoiAmDC.2.179 | Khi quá trình sưởi ấm kết thúc, dải màu xanh sẽ ẩn đi. | По окончании прогрева синяя полоса исчезнет. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_gidr.2.180 | Ghi tham số của động cơ phải ở chế độ 0,3 max | Записать параметры правого двигателя на режиме 0,3 макс. |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_right.2.181 | Đưa tay dầu của động cơ phải về vị trí ga nhỏ | Установить РУД правого двигателя на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_vuxd.2.182 | Tiến hành kiểm tra hệ thống điêu khiển | Выполнить проверку системы управления (КСУ). |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.183 | Đưa con trỏ chuột về vị trí КСУ | Установить курсор на позицию КСУ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.184 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.185 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.186 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.187 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.188 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.189 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.190 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.191 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.192 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.193 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.194 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_cec.2.195 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_czo.2.196 |  |  |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.txt_thong_bao_trai.2.197 | Thực hiện theo yêu cầu ở cửa sổ số 5. Hệ thống hỏi có người trong khu vực làm việc của các cánh lái không ЛЮДИ ПРИСУТСТВУЮТ В ЗОНЕ ПРОВЕДЕНИИ РАБОТ? | Выполнить инструкции в окне 5. Система запрашивает: ЛЮДИ ПРИСУТСТВУЮТ В ЗОНЕ ПРОВЕДЕНИЯ РАБОТ? |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.btn_topl.2.198 | Ấn nút НЕТ | Нажать кнопку НЕТ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.txt_thong_bao_trai.2.199 | Hệ thống sẽ xuất hiện tiếp thông báo để bắt đầu kiểm tra hãy nhấn vào nút test ДЛЯ ЗАПУСКА НАЗЕМНОГО КОНТРОЛЯ ОСВОБОДИ УПРАВЛЕНИЕ НАЖИМ КНОПКУ ТЕСТ | Появится следующее сообщение: ДЛЯ ЗАПУСКА НАЗЕМНОГО КОНТРОЛЯ ОСВОБОДИ УПРАВЛЕНИЕ НАЖМИ КНОПКУ ТЕСТ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhTrai.test_kcy.2.200 | Nhấn nút ТЕСТ | Нажать кнопку ТЕСТ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.btn_kiss.2.201 | Chuyển màn hình bên phải sang thẻ КСУ | Переключить правый МФЦИ на мнемокадр КСУ. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.btn_kcy.2.202 | Thời gian kiểm tra КСУ là 170 giây. Trong quá trình kiểm tra sẽ xuất hiện tín hiệu báo hỏng giả của hệ thống. Lưu ý, trong quá trình kiểm tra không lắc đẩy cần lái, không đạp bàn đạp. | Время контроля КСУ составляет 170 секунд. В процессе контроля будут появляться ложные сигналы отказов системы. Внимание: в процессе контроля запрещается перемещать РУС и педали. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.manHinhPhai.btn_gidr.2.203 | Kiểm tra áp suất phanh | Проверить давление в тормозной системе. |  |  | \n";
		this.rawData += "MM_NgT | cum_dieu_khien.ui_can_lai.phanh.2.204 | Kiểm tra áp suất phanh lấy đà | Проверить давление стартового тормоза. |  |  | \n";
		this.rawData += "MM_NgT | cum_dieu_khien.ui_can_lai.phanh.2.205 | Thả phanh lấy đà | Отпустить стартовый тормоз. |  |  | \n";
		this.rawData += "MM_NgT | right_panel.phanh_do.2.206 | Nhả phanh đỗ | Снять со стояночного тормоза. |  |  | \n";
		this.rawData += "MM_NgT | right_panel.phanh_do.2.207 | Kiểm tra áp suất phanh đỗ | Проверить давление стояночного тормоза. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.bang_phai.mrk_xoay_banh_mui.2.208 | Kiểm tra xoay bánh mũi | Проверить управление разворотом носового колеса. |  |  | \n";
		this.rawData += "MM_NgT | cum_ban_dap.ban_dap_trai.2.209 | Đạp bàn đạp để kiểm tra xoay bánh mũi | Отклонить педали для проверки разворота носового колеса. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.bang_phai.mrk_xoay_banh_mui.2.210 | Tắt xoay bánh mũi | Выключить управление разворотом носового колеса. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.bang_cong_tac.den_pha.2.211 | Kiểm tra đèn pha hạ cánh | Проверить посадочные фары. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.bang_cong_tac.den_pha.2.212 | Kiểm tra đèn pha lăn | Проверить рулежные фары. |  |  | \n";
		this.rawData += "MM_NgT | manHinhChinh.bang_cong_tac.den_pha.2.213 | Tắt đèn pha | Выключить фары. |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_lev.2.214 | Sau khi kiểm tra xong các tham số, tiến hành tắt máy động cơ. Trước khi tắt máy, phải tắt các máy phát,  tắt hệ thống ô xy và tắt điều hòa | После проверки параметров приступить к останову двигателей. Перед остановом необходимо выключить генераторы, кислородную систему и систему кондиционирования. |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.generator_prav.2.215 |  |  |  |  | \n";
		this.rawData += "MM_NgT | nguonNangLuong.congTacNguon.kislorod_oxy.2.216 |  |  |  |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_left.2.217 | Để động cơ chạy ở chế độ không tải 2 phút, sau đó tắt máy. Tắt máy động cơ trái. | Дать двигателям поработать на режиме МГ 2 минуты, затем выключить. Выключить левый двигатель. | 12 |  | \n";
		this.rawData += "MM_NgT | rud_LeftRight.rud_right.2.218 | Tắt máy động cơ phải. | Выключить правый двигатель. | 12 |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.1 | MỞ MÁY NGOẠI TRƯỜNG | ЗАПУСК НА АЭРОДРОМЕ |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.2 | Kiểm tra khả năng hoạt động của các hệ thống trên máy bay khi sử dụng nguồn điện sân bay: | Выполнить проверку работоспособности бортовых систем при питании от аэродромного источника энергии: |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.akum_lev.3.3 | Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | включить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.akum_prav.3.4 | Bật công tắc АККУМ ПРАВ (ẮC QUY PHẢI); | включить выключатель АККУМ ПРАВ; |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.5 | Kiểm tra sự hiển thị của Màn hình chỉ thị đa năng ở cả hai buồng lái | проконтролировать индикацию на МФЦИ обеих кабин мнемокадров: |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.3.6 | Trên màn hình bên trái hiển thị khung hình Kiểm tra trước khi bay ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; | на левом ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhPhai.3.7 | Trên màn hình bên phải hiển thị khung hình КИСС ТИПОВОЙ; | на правом КИСС ТИПОВОЙ; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.8 | Trên màn hình ở giữa hiển thị khung hình КИСС СЭС; | на среднем КИСС СЭС; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_avtk.3.9 | Kiểm tra tự động tình trạng hoạt động của ВСУ và các động cơ | Автономный контроль работоспособности ВСУ и двигателей |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.10 | Di chuyển con trỏ đến dòng ВСУ | Установить курсор на строку ВСУ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.11 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.12 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.13 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.14 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.15 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.16 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.17 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.18 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.19 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.20 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.21 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.22 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.23 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_czo.3.24 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của ВСУ | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля ВСУ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.txt_bcy.3.25 | Nếu tình trạng của ВСУ tốt thì sẽ xuất hiện thông báo ВСУ исправна | При исправности ВСУ появится сообщение ВСУ исправна |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_vuxd.3.26 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.27 | Di chuyển con trỏ chuột đến vị trí СУ лев để điểm tra động cơ trái | Установить курсор на позицию СУ лев для проверки левого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_czo.3.28 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của động cơ trái | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля левого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.txt_cy_lev.3.29 | Nếu tình trạng của động cơ trái tốt thì sẽ xuất hiện thông báo САУ СУ л исправна | При исправности левого двигателя появится сообщение САУ СУ л исправна |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_vuxd.3.30 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.31 | Di chuyển con trỏ chuột đến vị trí СУ лев để điểm tra động cơ phải | Установить курсор на позицию СУ прав для проверки правого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_czo.3.32 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của động cơ phải | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля правого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.txt_cy_prav.3.33 | Nếu tình trạng của động cơ trái tốt thì sẽ xuất hiện thông báo САУ СУ пр исправна | При исправности правого двигателя появится сообщение САУ СУ пр исправна |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_vuxd.3.34 | Ấn nút ВЫХ để thoát ra | Нажать кнопку ВЫХ для выхода |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_bask.3.35 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance47280.3.36 | Thực hiện tuần tự các hướng dẫn hiển thị trong cửa sổ 5 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: | выполнить последовательно инструкции, предъявляемые в окне 5 мнемокадра ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance47280.3.37 | ПРОВЕРЬ ЭКРАНЫ МФЦИ, УСТАНОВИ ЯРКОСТЬ (KIỂM TRA MÀN HÌNH МФЦИ, THIẾT LẬP ĐỘ SÁNG) | ПРОВЕРЬ ЭКРАНЫ МФЦИ,УСТАНОВИ ЯРКОСТЬ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.kyhieuN.3.38 | Kiểm tra tình trạng hoạt động của các màn hình chỉ thị bằng sự hiện diện của biểu tượng N ở góc dưới bên phải màn hình; | проконтролировать исправность индикаторов по наличию символа N в правом нижнем углу экрана; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.kyhieuN.3.39 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhPhai.kyhieuN.3.40 |  |  |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.41 | Thiết lập độ sáng cần thiết; | установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.42 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance48303.3.43 | ПРОВЕРЬ СЭС (KIỂM TRA HỆ THỐNG ĐIỆN) | ПРОВЕРЬ СЭС |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.44 | Kiểm tra điện áp nguồn điện trên khung hình КИСС СЭС | по индикации на мнемокадре СЭС проверить соответствие напряжения электропитания установленным значениям и состояние СЭС; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.45 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.46 | Kiểm tra sự thay đổi hiển thị trên màn hình МФЦИ ở giữa từ khung hình КИСС СЭС sang khung hình КИСС ДВИГАТЕЛЬ. | проконтролировать смену индикации на среднем МФЦИ мнемокадра КИСС СЭС на мнемокадр КИСС ДВИГАТЕЛЬ. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance48532.3.47 | ПРОВЕРЬ ЛАМПЫ САС (KIỂM TRA CÁC ĐÈN BÁO KHẨN CẤP) | ПРОВЕРЬ ЛАМПЫ САС |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.kontron_lamp.3.48 | Nhấn nút КОНТРОЛЬ ЛАМП (KIỂM TRA ĐÈN) | нажать кнопку КОНТРОЛЬ ЛАМП на правой стороне приборной доски; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.denBaoHong_Gidr.3.49 | Đánh giá độ sáng của các đèn báo khẩn cấp; | оценить свечение ламп САС; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.denBaoHong_CDY.3.50 | Đèn báo hỏng hệ thông điều khiển | Светосигнализатор отказа системы управления |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.pajar_kran_prav.3.51 | Đèn báo cháy động cơ phải | Табло пожара правого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.pajar_kran_lev.3.52 | Đèn báo cháy động cơ trái | Табло пожара левого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.denBaoHongTapTrung.3.53 | Đèn báo hỏng tập trung | Централизованный разовый отказ (ЦРО) |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.54 | Nếu tốt, nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance49446.3.55 | ПРОВЕРЬ РИ (KIỂM TRA THÔNG THOẠI) | ПРОВЕРЬ РИ |  |  | \n";
		this.rawData += "MM_NT | left_panel.ri.3.56 | Nhấn nút РИ trên bảng điều khiển đài vô tuyến; | нажать кнопку РИ на пульте управления радиостанцией; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.57 | Nghe thông báo РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН (HỆ THỐNG THÔNG THOẠI HOẠT ĐỘNG TỐT); Nhấn nút ДА. | прослушать сообщение РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance49639.3.58 | ПРОВЕРЬ ВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ (KIỂM TRA CHIẾU SÁNG TRONG BUỒNG LÁI) | ПРОВЕРЬВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.59 | – Thực hiện kiểm tra bằng mắt thường hệ thống chiếu sáng trong buồng lái; Nhấn nút ДА. | – выполнить визуальную проверку внутрикабинного освещения; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance49796.3.60 | ПРОВЕРЬ ИНДИКАТОР ПУИ (KIỂM TRA MÀN HÌNH CHỈ THỊ PUI) | ПРОВЕРЬИНДИКАТОР ПУИ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.pui.3.61 | – Kiểm tra để đảm bảo trên ПУИ không có thông báo НЕТ ИНФОРМАЦИИ (KHÔNG CÓ THÔNG TIN); | – проконтролировать отсутствие на ПУИ сообщения НЕТ ИНФОРМАЦИИ; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.pui.yark.3.62 | – Cài đặt độ sáng theo yêu cầu; | – установить требуемую яркость; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.63 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance50013.3.64 | ПРОВЕРЬ ИНДИКАТОР ИЛС (KIỂM TRA MÀN HÌNH CHỈ THỊ KÍNH NGẮM) | ПРОВЕРЬИНДИКАТОР ИЛС |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.65 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.66 | Khi hoàn thành kiểm tra này, trên màn hình МФЦИ giữa, khung hình КИСС ДВИГ sẽ thay đổi thành khung hình НАЧАЛЬНЫЕ ДАННЫЕ (DỮ LIỆU BAN ĐẦU). | По окончанию выполнения данной проверки на среднем МФЦИ мнемокадр КИСС ДВИГ меняется на мнемокадр НАЧАЛЬНЫЕ ДАННЫЕ. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance50218.3.67 | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕ ВКЛЮЧИ ВЫСТАВКУ БИНС УСТАНОВИ (NHẬP DỮ LIỆU BAN ĐẦU BẬT CĂN CHỈNH BINS) | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕВКЛЮЧИ ВЫСТАВКУ БИНСУСТАНОВИ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.68 | – Nhập (kiểm tra) các dữ liệu ban đầu và dữ liệu cài đặt; Nhấn nút ДА. | – ввести (проконтролировать) начальные и установочные данные; нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance52584.3.69 | ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ THOÁT HIỂM) | 10. ВЫБЕРИ РЕЖИМКАТАПУЛЬТИРОВАНИЯ |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.70 | Đồng thời với thông báo ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ trong cửa sổ số 5 sẽ hiển thị thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ ДВУХ КАБИН hoặc КАТАПУЛЬТИРОВАНИЕ ИЗ ПЕРВОЙ КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI TRƯỚC) tùy thuộc vào vị trí của công tắc КАТАПУЛЬТИРОВАНИЕ (PHÓNG GHẾ) trên bảng điều khiển ngang bên trái của buồng lái thứ hai dựa theo số lượng thành viên phi hành đoàn. | Одновременно с сообщением ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ в окне 5 индицируется сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ ДВУХ КАБИН или КАТАПУЛЬТИРОВАНИЕ ИЗ ПЕРВОЙ КАБИНЫ в зависимости от положения переключателя КАТАПУЛЬТИРОВАНИЕ на левом горизонтальном пульте второй кабины в зависимости от количества членов экипажа. |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.71 | – Để xác nhận chọn phóng ghế từ hai buồng lái (khi có hai thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong mỗi buồng lái, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН (PHÓNG GHẾ TỪ 2 BUỒNG LÁI) sẽ tắt; | для подтверждения выбора катапультирования из двух кабин (при двух членах экипажа) необходимо нажать кнопку ДА на левом МФЦИ в каждой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН погаснут; |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.72 | – Để xác nhận chọn phóng ghế từ buồng lái thứ nhất (khi có một thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong buồng lái thứ nhất, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI 1) sẽ tắt. | – для подтверждения выбора катапультирования из первой кабины (при одном члене экипажа) необходимо нажать кнопку ДА на левом МФЦИ в первой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ погаснут. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.instance53006.3.73 | КОНТРОЛЬ КСАП (KIỂM TRA HỆ THỐNG SÁT THƯƠNG HÀNG KHÔNG) | КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_NT | right_panel.congTacThanhPhai.kiem_tra_ksap.3.74 | – Nhấc nắp bảo vệ nút ấn thoát hiểm. | ‒ поднять защитную крышку КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "MM_NT | right_panel.congTacThanhPhai.kontpksap.3.75 | – Nhấn nút КОНТРОЛЬ КСАП trên thành phải của buồng lái thứ nhất. Nếu hệ thống КСАП hoạt động tốt, hướng dẫn trong cửa sổ số 5 ВЫПОЛНИ КОНТРОЛЬ КСАП sẽ thay đổi thành thông báo ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП (MẠCH ĐIỆN КСАП TỐT – BẬT NGUỒN КСАП); | ‒ нажать переключатель КОНТРОЛЬ КСАП расположенный на правом горизонтальном пульте первой кабины. При исправности системы КСАП инструкция в окне 5 ВЫПОЛНИ КОНТРОЛЬ КСАП меняется на сообщение ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП: ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП |  |  | \n";
		this.rawData += "MM_NT | right_panel.congTacThanhPhai.cong_tac_ksap.3.76 | – Đưa công tắc bật thoát hiểm về vị trí ВКЛ (BẬT), khi đó trong cửa sổ số 5 sẽ xuất hiện một trong các thông báo sau: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг; УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг; УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг; | – установить выключатель на правом горизонтальном пульте КСАП ВКЛ–ОТКЛ в положение ВКЛ, при этом в окне 5 высвечивается одно из сообщений: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_dvig.3.77 |  |  |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.78 | – Đặt công tắc МАССА (TRỌNG LƯỢNG) trên ghế phóng cứu hộ vào vị trí tương ứng với trọng lượng cần thiết; | – установить переключатель МАССА на катапультном кресле в положение, соответствующее необходимому весу; |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.79 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.80 | Để khởi động động cơ, lần lượt bật các công tắc sau: | Получив разрешение на запуск включить выключатели на правом вертикальном борту: |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.topl_nasos.3.81 | – ТОПЛ НАСОСЫ (BƠM NHIÊN LIỆU); | ‒ ТОПЛ НАСОСЫ; |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.kislorod_oxy.3.82 | – КИСЛОРОД (OXY). | ‒ КИСЛОРОД. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.small_panel_right.napAnKD_VCY.3.83 | Mở nắp đậy | Открыть крышку |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.small_panel_right.nutAnKD_VCY.3.84 | Ấn ntus khởi động ВСУ | Нажать кнопку запуска ВСУ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.85 | Trong quá trình khởi động ВСУ trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | В процессе запуска ВСУ на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.chedo.3.86 | – Chỉ thị dòng chữ ЗАПУСК (KHỞI ĐỘNG) phía trên đồng hồ chỉ thị các thông số của ВСУ; | – индикацию надписи ЗАПУСК над индикатором параметров ВСУ; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.3.87 | – Sự kích hoạt của bộ đếm thời gian khởi động ВСУ; | – включение счетчика времени запуска ВСУ; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.3.88 | – Sự gia tăng của vòng quay và nhiệt độ khí cháy; | – рост оборотов и температуры выходящих газов; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.3.89 | – Thời gian khởi động ВСУ (không quá 40 giây). | – время запуска ВСУ (не более 40 с). |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.3.90 | – Nhiệt độ khí cháy không được vượt quá 800 °C | При запуске ВСУ контролировать максимальную температуру выходящих газов – не должна превышать 800 °C |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.3.91 | – Vòng quay rô-to không được vượt quá 109 %. | Mаксимальные обороты ротора – не должны превышать 109 %. |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.92 | Nếu vượt quá các giá trị tối đa của nhiệt độ khí cháy hoặc vòng quay rô-to trong quá trình khởi động, hãy dừng việc khởi động bằng cách nhấn nút ОСТАНОВ trên bảng điều khiển. | При превышении в процессе запуска ВСУ максимальных значений температуры выходящих газов или оборотов ротора прекратить запуск ВСУ нажатием кнопки ОСТАНОВ на панели ВСУ. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.chedo.3.93 | Khi kết thúc quá trình khởi động ВСУ, dòng chữ ЗАПУСК phía sẽ thay đổi thành dòng chữ РЕЖИМ (CHẾ ĐỘ). | По окончании запуска ВСУ надпись ЗАПУСК над индикатором параметров ВСУ меняется на надпись РЕЖИМ. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.3.95 | – Nhiệt độ khí cháy tối đa không quá 720 °C; | – максимальная температура выходящих газов не более 720 °C; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.3.96 | – Số vòng quay rô-to tối đa không quá 109 %. | – максимальные обороты ротора не более 109 %. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_avtk.3.97 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.98 | Di chuyển con trỏ đến dòng ВСУ | Установить курсор на строку ВСУ |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.99 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.100 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.101 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.102 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.103 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.104 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.105 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.106 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.107 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.108 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.109 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.110 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.111 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_czo.3.112 | Ấn nút ЗАПР để vào khung hình kiểm tra tự động của ВСУ | Нажать кнопку ЗАПР для входа в мнемокадр автоматического контроля ВСУ |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.generator_vcy.3.113 | Bật máy phát điện của ВСУ | Включить генератор ВСУ |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.114 | Tiến hành khởi động và kiểm tra động cơ trái | Поочередно произвести запуск двигателей |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.115 | Đưa tay dầu của động cơ trái lên vị trí Ga nhỏ. | Установить РУД левый двигатель на упор МГ. | 17.7 |  | \n";
		this.rawData += "MM_NT | manHinhChinh.small_panel_right.napAnKD_DC.3.116 | Nhấn nút ЗАПУСК НА ЗЕМЛЕ (KHỞI ĐỘNG Ở MẶT ĐẤT), lúc này quá trình khởi động động cơ sẽ diễn ra. | Нажать кнопку ЗАПУСК НА ЗЕМЛЕ, при этом произойдет запуск двигателя. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.3.117 | Trong quá trình khởi động động cơ, trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | Во время запуска двигателя, на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.3.118 | – Sự kích hoạt của bộ đếm thời gian khởi động động cơ; | – включение счетчика времени запуска двигателя; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.3.119 | – Tín hiệu báo trạng thái khởi động động cơ (màu vàng); | – индикацию желтого сигнализатора работы системы запуска; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.den_VTC_Trai.3.120 | – Tín hiếu báo mở van ВТС (màu xanh da trời); | – индикацию синего сигнализатора открытия створки ВТС; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimCaoAp.3.121 | – Sự gia tăng vòng quay của rô-to áp suất cao (nРВД); | – нарастание оборотов ротора высокого давления (nРВД); |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.3.122 | – Sự gia tăng vòng quay của rô-to áp suất thấp (nРНД) khi nРВД = 20 %; | – нарастание оборотов ротора низкого давления (nРНД) при nРВД ≈ 20 %; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.ap_suat_nd_lev.3.123 | – Sự gia tăng áp suất dầu ở đầu nhờn ở cửa vào động cơ; | – увеличение давления масла на входе в двигатель; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.3.124 | – Sau 15 giây kể từ khi bắt đầu khởi động, sự gia tăng nhiệt độ khí cháy, giá trị này không được vượt quá 700 °C; | – через 15 с от начала запуска нарастание температуры выходящих газов, которая не должна превышать 700 °C; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.den_VTC_Trai.3.125 | – Sự ngắt ВТС và đóng cửa van ВТС dựa trên việc tắt đèn báo ВТС khi nРВД ≤ 55 %; | – отключение ВТС и закрытие створки ВТС по погасанию синего сигнализатора ВТС при nРВД ≤ 55 %; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.3.126 | – Thời gian khởi động động cơ tối đa, không được quá 60 giây; | – максимальное время запуска двигателя, которое должно быть не более 60 с; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.3.127 | – Việc tắt tín hiệu báo trạng thái khởi động động cơ, sau khi động cơ đạt đến chế độ ga nhỏ. | – погасание индикации желтого сигнала работы системы запуска, после выхода двигателя на режим малого газа. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhPhai.cua_hut_khi_Trai.3.128 | Kiểm tra, qua khung hình КИСС ТИПОВОЙ, việc mở cửa hút khí phía trên khi nРВД > 35 %. | Проконтролировать, по мнемокадру КИСС ТИПОВОЙ, перекладку створки воздухозаборника на верхний вход при nРВД > 35 %. |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.129 | 15 giây sau khi động cơ trái đạt đến chế độ ga nhỏ, động cơ phải sẽ tự động bắt đầu khởi động. | Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "MM_NT | mc_Subtitle.nextG.3.130 | Sau khi khởi động, kiểm tra các thông số hoạt động của động cơ ở chế độ ga nhỏ: | После запуска проконтролировать параметры работы двигателей на МГ: |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.3.131 | – Vòng quay rô to thấp áp nРНД = 28…35 %; | – nРНД = 28…35 %; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.vongQuay_txt.3.132 | – Vòng quay rô to cao áp nРВД ≥ 60 %; | – nРВД ≥ 60 %; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.3.133 | – Nhiệt độ khí cháy không vượt quá 700 °C; | – температура выходящих газов – не более 700 °C; |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.ap_suat_nd_lev.3.134 | – Áp suất dầu không nhỏ hơn 2,0 kg/cm². | – давление масла – не менее 2,0 кг/см². |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.generator_lev.3.135 | Bật máy phát điện của động cơ trái | Включить генератор левого двигателя |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_bask.3.136 | Ghi các tham số hoạt động của động cơ ở chế độ Ga nhỏ | Записать параметры работы двигателей на режиме МГ. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_avtk.3.137 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.138 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.139 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.140 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.141 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.142 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.143 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.144 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.145 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.146 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.147 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.148 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.149 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.150 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.151 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_kcy.3.152 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_czo.3.153 | Ghi tham số của động cơ trái | Записать параметры левого двигателя |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.154 | Sưởi ấm động cơ trái ở chế độ 0,3 max (dải màu xanh). Thời gian sưởi ấm động cơ không nhỏ hơn 1,5 phút | Прогреть левый двигатель на режиме 0,3 макс (синяя полоса). Время прогрева двигателя должно быть не менее 1,5 мин. | 32.4 |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.daiSuoiAmDC.3.155 | Khi quá trình sưởi ấm kết thúc, dải màu xanh sẽ ẩn đi. | По окончании прогрева синяя полоса исчезнет. |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.btn_lev.3.156 | Ghi tham số của động cơ trái ở chế độ 0,3 max | Записать параметры левого двигателя на режиме 0,3 макс. |  |  | \n";
		this.rawData += "MM_NT | cum_dieu_khien.ui_can_lai.phanh.3.157 | Bóm phanh lấy đà |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhPhai.btn_gidr.3.158 | Kiểm tra áp suất phanh |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhPhai.btn_kiss.3.159 |  |  |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.160 | Đưa động cơ lên chế độ học tập tương ứng với góc tay dầu bằng 59,5 độ |  | 59.5 |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhTrai.3.161 | Giữ động cơ ở chế độ này từ 10 đến 15 giây để cho các tham số ổn định. Sau đó đưa động cơ lên chế độ max |  |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.162 | Đưa động cơ lên chế độ max, và kiểm tra các tham số |  | 65 |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.cay_du_phong_trai.3.163 | Kiểm tra sự hoạt động của động cơ ở chế độ dự phòng bằng cách ấn nút РЕЗ |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.truy_cap.3.164 | Ấn nút ВВОД, lúc này động cơ sẽ tự động chuyển sang chế độ dự phòng 0,7 max. Giữ 10 đến 15 giây cho các tham số ổn định sau đó đưa tay dầu về vị trí ga nhỏ. |  |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.165 | Đưa tay dầu về vị trí ga nhỏ. Lúc này động cơ sẽ tự động chuyển về chế độ 0,3 max. Để 10 đến 15 giây sau đó chuyển động cơ về chế độ chính. |  | 17.7 |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.cay_chinh_trai.3.166 | Chuyển động cơ về chế độ chính bằng cách ấn nút ОСН |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.manHinhGiua.truy_cap.3.167 | Ấn nút ВВОД, lúc này động cơ sẽ tự động chuyển sang chế độ tương ứng với vị trí của tay ga (chế độ ga nhỏ) |  |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.168 | Kiểm tra tăng tốc, đẩy tay dầu từ chế độ ga nhỏ lên chế độ Max. Thời gian tăng vòng quay từ ga nhỏ lên đến 95% không quá 6 giây. |  | 65 |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.169 | Kiểm tra giảm tốc, kéo tay dầu từ chế độ max về chế độ ga nhỏ. Thời gian giảm tốc không quá 7 giây. Sau đó làm mát động cơ ở chế độ ga nhỏ, trong thời gian không nhỏ hơn 2 phút. Trước khi tắt máy, phải tắt các tải. |  | 17.7 |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.generator_lev.3.170 | Tắt máy phát điện động cơ trái, tắt điều hòa. |  |  |  | \n";
		this.rawData += "MM_NT | rud_LeftRight.rud_left.3.171 | Tắt máy động cơ và đo thời gian quay quán tính. Sau đó tiến hành tắt ВСУ, trước khi tắt phải tắt các tải. |  | 12 |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.generator_vcy.3.172 |  |  |  |  | \n";
		this.rawData += "MM_NT | nguonNangLuong.congTacNguon.kislorod_oxy.3.173 |  |  |  |  | \n";
		this.rawData += "MM_NT | manHinhChinh.small_panel_right.nutTatMay_VCY.3.174 | Ấn nút ОСТАНОВ để tắt ВСУ và đo thời gian quay quán tính.  Trường hợp nếu muốn kiểm tra động cơ phải thì thực hiện tương tự |  |  |  | \n";
		this.rawData += "Gioi_Thieu | mc_Subtitle.nextG.4.1 | CHÀO MỪNG BẠN ĐẾN VỚI PHẦN GIỚI THIỆU PHẦN MỀM VÀ HỌC TẬP TRANG THIẾT BỊ BUỒNG LÁI. HÃY CLICK CHUỘT VÀO BIỂU TƯỢNG MÁY XANH ĐỂ SANG BƯỚC TIẾP THEO | ДОБРО ПОЖАЛОВАТЬ В ПРОГРАММУ ВВЕДЕНИЯ И ИЗУЧЕНИЯ ОБОРУДОВАНИЯ КАБИНЫ ЭКИПАЖА. НАЖМИТЕ НА СИНИЙ/ЗЕЛЕНЫЙ ЗНАЧОК ДЛЯ ПЕРЕХОДА К СЛЕДУЮЩЕМУ ШАГУ |  |  | \n";
		this.rawData += "Gioi_Thieu | mc_Subtitle.nextG.4.2 | Trước mặt các bạn là giao diện buồng lái trước của Máy bay Iak-130 | Перед вами интерфейс передней кабины самолета Як-130 |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.4.3 | Đây là bảng các thiết bị thành trước của buồng lái | Это приборная доска кабины |  |  | \n";
		this.rawData += "Gioi_Thieu | left_panel.4.4 | Đây là thành trái của buồng lái | Это левый борт кабины |  |  | \n";
		this.rawData += "Gioi_Thieu | right_panel.4.5 | Đây là thành phải của buồng lái | Это правый борт кабины |  |  | \n";
		this.rawData += "Gioi_Thieu | rud_LeftRight.rud_left.4.6 | Đây là tay dầu điều khiển động cơ trái | Это рычаг управления левым двигателем (РУД лев.) | 17.7 | 50 | \n";
		this.rawData += "Gioi_Thieu | rud_LeftRight.rud_right.4.7 | Đây là tay dầu điều khiển động cơ phải | Это рычаг управления правым двигателем (РУД прав.) | 32.4 | 65 | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.4.8 | Đây là bảng công tắc nguồn | Это панель выключателей питания |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongT2.4.9 | Click vào đây để ẩn, hiện tay dầu | Нажмите здесь, чтобы скрыть/показать РУД |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongT1.4.10 | Click vào đây để ẩn, hiện thành trái buồng lái | Нажмите здесь, чтобы скрыть/показать левый борт кабины |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongP1.4.11 | Click vào đây để ẩn, hiện thành phải buồng lái | Нажмите здесь, чтобы скрыть/показать правый борт кабины |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongP2.4.12 | Click vào đây để ẩn, hiện bảng công tắc nguồn | Нажмите здесь, чтобы скрыть/показать панель выключателей питания |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.akum_lev.4.15 | Đây là công tắc bật/tắt Ắc quy Trái | Это выключатель АККУМ ЛЕВ (Аккумулятор левый) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.akum_prav.4.16 | Đây là công tắc bật/tắt Ắc quy Phải | Это выключатель АККУМ ПРАВ (Аккумулятор правый) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_lev.4.17 | Đây là công tắc bật/tắt Máy phát điện Trái | Это выключатель генератора левого двигателя (ГЕН ЛЕВ) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_prav.4.18 | Đây là công tắc bật/tắt Máy phát điện Phải | Это выключатель генератора правого двигателя (ГЕН ПРАВ) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_vcy.4.19 | Đây là công tắc bật/tắt Máy phát điện ВСУ | Это выключатель генератора ВСУ (ГЕН ВСУ) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.topl_nasos.4.20 | Đây là công tắc bật/tắt Bơm nhiên liệu | Это выключатель топливных насосов (ТОПЛ НАСОСЫ) |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.kislorod_oxy.4.21 | Đây là công tắc bật/tắt Nguồn Ô xy | Это выключатель кислорода (КИСЛОРОД) |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.rerum_zapus_lev.4.22 | Đây là công tắc lựa chọn chế độ Khởi động của động cơ trái | Это переключатель выбора режима запуска левого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.rerum_zapus_prav.4.23 | Đây là công tắc lựa chọn chế độ Khởi động của động cơ Phải | Это переключатель выбора режима запуска правого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.napAnKD_DC.4.24 | Đây là nắp đậy công tắc khởi động động cơ ở mặt đất | Это защитная крышка кнопки запуска двигателя на земле |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutAnKD_DC.4.25 | Đây là công tắc khởi động động cơ ở mặt đất | Это кнопка ЗАПУСК НА ЗЕМЛЕ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.napAnKD_VCY.4.26 | Đây là nắp đậy công tắc khởi động ВСУ | Это защитная крышка кнопки запуска ВСУ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutAnKD_VCY.4.27 | Đây là nút ấn khởi động ВСУ | Это кнопка запуска ВСУ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutTatMay_VCY.4.28 | Đây là nút ấn tắt, tắt khẩn cấp ВСУ | Это кнопка останова/экстренного останова ВСУ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhTrai.4.29 | Đây là màn hình МФЦИ bên trái | Это левый МФЦИ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.4.30 | Đây là màn hình МФЦИ ở giữa | Это средний МФЦИ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhPhai.4.31 | Đây là màn hình МФЦИ bên phải | Это правый МФЦИ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_pil.4.32 | Click vào đây để chuyển sang khung hình bay ПИЛОТАЖ | Нажмите здесь для переключения на мнемокадр ПИЛОТАЖ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_nvg.4.33 | Click vào đây để chuyển sang khung hình dẫn đường НАВИГАЦИЯ | Нажмите здесь для переключения на мнемокадр НАВИГАЦИЯ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_ito.4.34 | Click vào đây để chuyển sang khung hình dẫn đường НАВИГАЦИЯ | Нажмите здесь для переключения на мнемокадр НАВИГАЦИЯ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_kiss.4.35 | Click vào đây để chuyển sang khung hình КИСС ТИПОВОЙ | Нажмите здесь для переключения на мнемокадр КИСС ТИПОВОЙ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_dvig.4.36 | Click vào đây để chuyển sang khung hình КИСС ДВИГАТЕЛЬ | Нажмите здесь для переключения на мнемокадр КИСС ДВИГАТЕЛЬ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_topl.4.37 | Click vào đây để chuyển sang khung hình КИСС ТОПЛИВО | Нажмите здесь для переключения на мнемокадр КИСС ТОПЛИВО |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_gidr.4.38 | Click vào đây để chuyển sang khung hình КИСС ГИДР | Нажмите здесь для переключения на мнемокадр КИСС ГИДР |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_cec.4.39 | Click vào đây để chuyển sang khung hình КИСС СЭС | Нажмите здесь для переключения на мнемокадр КИСС СЭС |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_kcy.4.40 | Click vào đây để chuyển sang khung hình КИСС КСУ | Нажмите здесь для переключения на мнемокадр КИСС КСУ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_czo.4.41 | Click vào đây để chuyển sang khung hình КИСС СЖО | Нажмите здесь для переключения на мнемокадр КИСС СЖО |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHong_CDY.4.42 | Đây là đèn báo hỏng hệ thống СДУ | Это светосигнализатор отказа системы СДУ |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHong_Gidr.4.43 | Đây là đèn báo hỏng hệ thống thủy lực ГИДР | Это светосигнализатор отказа гидросистемы ГИДР |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_prav.pajar_lamp_prav.4.44 | Đây là đèn báo cháy động cơ bên phải | Это табло пожара правого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_prav.pajar_kran_prav.4.45 | Đây là đèn báo đóng khóa phòng hỏa động cơ bên phải | Это светосигнализатор закрытия пожарного крана правого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_lev.pajar_lamp_lev.4.46 | Đây là đèn báo cháy động cơ bên trái | Это табло пожара левого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_lev.pajar_kran_lev.4.47 | Đây là đèn báo đóng khóa phòng hỏa động cơ bên trái | Это светосигнализатор закрытия пожарного крана левого двигателя |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHongTapTrung.4.48 | Đây là đèn báo hỏng tập trung | Это светосигнализатор централизованного разового отказа (ЦРО) |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.instance3.instance7.4.49 | Đây là cần thu/ thả càng | Это кран уборки/выпуска шасси |  |  | \n";
		this.rawData += "Kiss_Tipovoi | nguonNangLuong.congTacNguon.akum_lev.5.1 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | nguonNangLuong.congTacNguon.akum_prav.5.2 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.5.3 | Đây là khung hình КИСС ТИПОВОЙ |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.chedo.5.4 | Chỉ báo trạng thài hoạt động của ВСУ Hiển thị dưới dạng hình chữ nhật màu trắng với tên chế độ làm việc bên trong:ЗАПУСК (Khởi động) – màu vàng;РЕЖИМ (Đang hoạt động) – màu xanh lá;СТОП (Dừng) – màu đỏ. | Признак режима работы ВСУ в виде прямоугольника белого цвета с наименованием режима работы внутри:ЗАПУСК – желтого цветаРЕЖИМ – зеленого цветаСТОП – красного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.instance42449.5.5 | Chỉ báo hệ thống thủy lực tăng cường. | Признак бустерной гидросистемы |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.instance40732.5.6 | Chỉ báo hệ thống thủy lực chung và tăng cường Hiển thị dưới dạng thang đo (cột) màu xanh lục với vạch chỉ thị màu trắng. Giới hạn dưới là 110 kg/cm², giới hạn trên là 230 kg/cm². Các giá trị áp suất tới hạn trên và dưới được hiển thị bằng các hình tam giác màu đỏ. | Признак общей / бустерной гидросистемы индицируются в виде шкал (\"столбиков\") зеленого цвета с отсчетными индексами белого цвета. Нижняя граница 110 кгс/см2, верхняя 230 кгс/см2. Верхние и нижние предельные значения... отображаются в виде треугольников красного цвета. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.instance40726.5.7 | Chỉ báo thùng nhiên liệu phụ (thùng treo) Ký hiệu thùng nhiên liệu treo chỉ hiển thị khi trên máy bay thực tế có mang thùng dầu phụ. Việc tiêu thụ nhiên liệu được hiển thị bằng cách thay thế màu vàng bằng màu trắng. | Признак ПТБ. Подвесные топливные баки отображаются только при наличии на борту подвесных баков. Расход топлива индицируется путем замены желтого цвета на белый... |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.thungcanhphai.5.8 | Chỉ báo thùng nhiên liệu cánh | Признак крыльевых топливного бака |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.thungnhienlieuthan.5.9 | Chỉ báo thùng nhiên liệu chính (thùng thân) Khi nhiên liệu tiêu hao tiêu thụ nhiên liệu ở mỗi thùng được hiển thị bằng cách thay thế màu vàng bằng màu trắng, theo đó phần màu vàng sẽ tụt dần xuống dưới. | Признак основного фюзеляжного топливного бака. Расход топлива в каждом баке индицируется путем замены желтого цвета на белый, при этом желтый цвет опускается вниз. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.thungtieuhao.5.10 | Tổng lượng nhiên liệu còn lại hiển thị bằng bộ đếm 4 chữ số màu đen nằm bên trong ký hiệu thùng tiêu thụ. Khi có tín hiệu nhiên liệu ở mức khẩn cấp, ký hiệu thùng tiêu thụ sẽ nhấp nháy màu đỏ. | Суммарный остаток топлива индицируется в виде черырехразрядного счетчика черного цвета, расположенного внутри символа расходного бака. При наличии признака аварийного остатка символ индицируется красным цветом в проблесковом режиме. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canhtatruoc_trai_1.5.11 | Chỉ báo thả cánh mũi ở góc 20° và 27° được hiển thị bằng các ký hiệu màu xanh lá nằm phía trên hình chiếu đôi cánh. | Признаки выхода носков крыла на 20° и на 27° индицируются в виде символов зеленого цвета, расположенных над силуэтом крыльев |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canhtatruoc_trai_2.5.12 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canhtatruoc_phai_1.5.13 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canhtatruoc_phai_2.5.14 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canh_ta_sau_trai.5.15 | Chỉ báo thả cánh tà ở góc 20° và 40° (vị trí cất cánh và hạ cánh) được hiển thị bằng các hình chữ nhật màu xanh lục nằm phía dưới hình chiếu đôi cánh. | Признаки выхода закрылков на 20° и на 40° (взлетное и посадочное положение) индицируются в виде прямоугольников зеленого цвета, расположенных под силуэтом крыльев |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.canh_ta_sau_phai.5.16 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | rud_LeftRight.rud_right.tam_giam_toc.5.17 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.tamgiamtoc.5.18 | Chỉ báo thả tấm giảm tốc hiển thị dưới dạng hình chữ nhật màu xanh lục với chữ viết tắt ТЩ màu đen. | Признак выпуска тормозного щитка индицируется в виде прямоугольника зеленого цвета с аббревиатурой ТЩ черного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.oxy.5.19 | Chỉ báo nắp buồng lái đang mở hiển thị dưới dạng một ký hiệu màu đỏ. | Признак открытия фонаря индицируется в виде символа красного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.dongHoVongQuayTrai.5.20 | Đồng hồ vòng quay của rô to cao áp | Параметры оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.dongHoVongQuayPhai.5.21 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.dongHoVongQuayTrai.vongQuay_txt_2.5.22 | Giá trị vòng quay của rô to cao áp | Счетчики и указатели числа оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Tipovoi | manHinhChinh.manHinhPhai.nhietDo_Trai_txt_2.5.23 | Chỉ số nhiệt độ khí cháy sau tuabin của động cơ | Счетчики температуры исходящих газов двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | nguonNangLuong.congTacNguon.akum_lev.6.1 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | nguonNangLuong.congTacNguon.akum_prav.6.2 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.btn_kiss.6.3 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.btn_dvig.6.4 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.6.5 | Đây là khung hình КИСС ДВИГАТЕЛЬ |  |  |  | \n";
		this.rawData += "Kiss_Dvig | nguonNangLuong.congTacNguon.topl_nasos.6.6 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | nguonNangLuong.congTacNguon.kislorod_oxy.6.7 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | rud_LeftRight.rud_left.6.8 |  |  | 17.7 |  | \n";
		this.rawData += "Kiss_Dvig | rud_LeftRight.rud_right.6.9 |  |  | 17.7 |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.small_panel_right.napAnKD_DC.6.10 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.small_panel_right.nutAnKD_VCY_2DC.6.11 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoBCY.kimVCY1.6.12 | Đồng hồ vòng quay của ВСУ | Шкала оборотов ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoBCY.kimVCY2.6.13 | Đồng hồ nhiệt độ khí cháy của ВСУ | Шкала температуры исходящих газов ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.6.14 | Đồng hồ vòng quay của động cơ | Шкала оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.6.15 | Tín hiệu báo trạng thái khởi động của động cơ | Сигнализатор состояния двигателя |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.vongQuay_txt.6.16 | Chỉ số vòng quay rô to cao áp | Счетчики и указатели оборотов двигателей (Nвдпр) |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.6.17 | Kim chỉ vòng quay của rô to thấp áp | Указатели оборотов двигателей (Nндпр) |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.6.18 | Chỉ số nhiệt độ khí cháy sau tuabin của động cơ | Счетчики температуры исходящих газов двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.chi_bao_rung_dc_trai.6.19 | Thang đo và vạch chỉ thị độ rung ổ đỡ động cơ | Шкалы и указатели вибрации опор двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.instance58416.6.20 | Tín hiệu báo hóc khí động cơ | Сигнализаторы «помпажа» двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dvMax_lev.6.21 | Chỉ báo chế độ làm việc của động cơ | Указатели режима работы двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.alpha_rud_lev.6.22 | Chỉ báo vị trí góc tay ga ga (РУД) | Указатели углового положения РУД |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.ap_suat_nd_lev.6.23 | Chỉ báo áp suất dầu nhờn | Счетчики величины давления масла двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.nhiet_do_nd_lev.6.24 | Chỉ báo nhiệt động dầu nhờn ở cửa vào động cơ | Счетчики температуры масла на входах в двигатели |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.den_VTC_Trai.6.25 | Tín hiệu báo trạng thái hoạt động của tuabin khí khởi động ВТС | Сигнализаторы состояния ВТС двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.6.26 | Chỉ báo thời gian khởi động động cơ | Счетчики времени запуска двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.chedo.6.27 | Tín hiệu báo trạng thái hoạt động của ВСУ | Режим работы ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.6.28 | Chỉ báo thời gian khởi động của ВСУ | Счетчик времени запуска ВСУ |  |  | \n";
		this.rawData += "Kiss_Topl | nguonNangLuong.congTacNguon.akum_lev.7.1 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | nguonNangLuong.congTacNguon.akum_prav.7.2 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.btn_topl.7.3 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhGiua.7.4 | Đây là khung hình КИСС ТОПЛИВО |  |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.dong_ho_luong_dau.7.5 | Đồng hồ lượng dầu. Ở phần bên phải của màn hình hiển thị các thang đo dạng cột (tuyến tính) của đồng hồ đo nhiên liệu \"T\" và lượng nhiên liệu dự trữ tổng cộng tính toán \"P\"màu trắng. Phía trên các thang đo có dòng chữ \"X 1000 кг\" (x1000 kg). Отсчет текущих значений топлива производится по подвижным столбикам желтого цвета. В нижней части каждой шкалы индицируется величина аварийного остатка топлива (180 кг) в виде вертикальных столбиков красного цвета. | Линейная шкала топливомера. В правой части мнемокадра индицируются линейные шкалы топливомера \"Т\" и расчетного суммарного запаса топлива \"Р\" белого цвета. Над шкалами индицируется надпись \"Х 1000 кг\". Việc đọc các giá trị nhiên liệu hiện tại được thực hiện thông qua các cột di động màu vàng. Ở phần dưới của mỗi thang đo hiển thị mức nhiên liệu còn lại khẩn cấp (180 kg) dưới dạng các cột dọc màu đỏ. |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.dong_ho_tieu_hao.7.6 | Đồng hồ tiêu hao | Линейная шкала расчетного значения топлива |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.thung_than.7.7 | Tổng lượng nhiên liệu trên máy bay. Phía trên các ký hiệu thùng nhiên liệu hiển thị một bộ đếm bốn chữ số của đồng hồ đo nhiên liệu màu trắng Gт кг. Bước nhảy của bộ đếm là 5 kg. Chỉ số của bộ đếm Gт кг tương ứng với chỉ số của thang đo \"P\" và chỉ số của bộ đếm được hiển thị trên nền thùng nhiên liệu tiêu thụ ở màn hình КИСС (chuẩn). | Счетчик суммарной массы топлива. Над символами топливных баков индицируется четырех разрядный счетчик топливомера белого цвета Gт кг. Дискретность счетчика – 5 кг. Показания счетчика Gт кг соответствуют показаниям шкалы \"Р\" и показаниям счетчика, индицируемого на фоне расходного бака на мнемокадре КИСС (типовой). |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.thung_canh_trai.7.9 | Thùng nhiên liệu cánh | Символы крыльевых баков |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.thung_tieu_hao.7.10 | Thùng nhiên liệu tiêu hao. Trên nền thùng nhiên liệu tiêu hao có hiển thị một đường ngang màu đỏ, vị trí của nó tương ứng với mức nhiên liệu khẩn cấp còn lại 180 kg. | Символ расходного топливного бака. На фоне расходного бака отображается красная горизонтальная линия, расположение которой соответствует аварийному остатку топлива 180 кг. |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.thung_phu_trai.7.11 | Thùng dầu phụ (thùng treo). Các thùng nhiên liệu treo ngoài, với tên gọi ЛПТБ (Thùng trái), ППТБ (Thùng phải) và các đường ống nối thùng treo với thùng chính, chỉ hiển thị khi máy bay thực tế có mang theo thùng treo ngoài. | Символы подвесных топливных баков.Подвесные топливные баки, наименованием ЛПТБ, ППТБ и трубопроводы, соединяющие ПТБ с основным баком, отображаются только при наличии на борту подвесных баков. |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.bomNLKD.7.12 | Bơm nhiên liệu khởi động. Phía dưới các thùng nhiên liệu hiển thị các ký hiệu mô tả trạng thái của bơm nhiên liệu khởi động và bơm chính, trạng thái các van khóa và dấu hiệu hoạt động của động cơ: | Признак работы пускового топливного насоса. Ниже топливных баков индицируются символы, характеризующие состояние пускового и основного топливных насосов, состояние перекрывных кранов и признаки работы двигателей: |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.bomNLDay.7.13 | Bơm nhiên liệu chính. Trạng thái của bơm nhiên liệu khởi động và bơm chính được hiển thị bằng màu sắc: đang hoạt động – màu xanh lục; hỏng hóc – màu đỏ; không hoạt động – màu của nền màn hình. | Признак работы основного топливного насоса. Состояние пускового и основного топливных насосов отображается цветом: признак работы – зеленый; отказ – красный; нерабочее состояние – цвет фона |  |  | \n";
		this.rawData += "Kiss_Topl | manHinhChinh.manHinhPhai.khoa_phong_hoa_trai.7.14 | Van ngắt nhiên liệu (khóa phòng hỏa). Van khóa đang mở – màu xanh lục; Van khóa đang đóng – màu của nền màn hình; Trạng thái không xác định – màu đỏ, ở chế độ nhấp nháy. | Признаки состояния перекрывных кранов. Состояние перекрывных кранов отображается цветом: перекрывной кран открыт – зеленый; перекрывной кран закрыт – цвет фона; неопределенное состояние – красный, в проблесковом режиме. |  |  | \n";

		this.rawErrors += "Thao tác sai, vui lòng thử lại. | Неверное действие, попробуйте снова.\n";
		this.rawErrors += "Bạn đã ấn nhầm nút, hãy kiểm tra kỹ. | Вы нажали не ту кнопку, проверьте еще раз.\n";
		this.rawErrors += "Chưa đúng, hãy nhìn vào vòng tròn gợi ý. | Ошибка! Обратите внимание на подсказку.\n";
	}
};

window.ScenarioData.initData();
