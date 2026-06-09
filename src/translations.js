/**
 * Complete translations for CropSentinel
 * Languages: English (en), Hindi (hi), Gujarati (gu)
 */
export const translations = {
  en: {
    // Nav
    home: 'Home', farms: 'Farms', insights: 'Insights', alerts: 'Alerts', profile: 'Profile',
    // Welcome
    get_started: 'Get Started', tagline: 'AI-Powered Farm Intelligence',
    // Login
    welcome_back: 'Welcome back! 👋', login_to_continue: 'Login to continue',
    email_label: 'Email', password_label: 'Password',
    forgot_password: 'Forgot Password?', login_btn: 'Login',
    or_continue_with: 'or continue with', new_farmer: 'New farmer?', create_account: 'Create Account',
    // Home
    good_morning: 'Good Morning,', farmer: 'Farmer 🌿',
    heres_whats: "Here's what's happening on your farms",
    my_farms: 'My Farms', farms_alert: '{n} Farms • {a} Alert',
    add_new_field: '+ Add New Field',
    temp: 'Temp', humidity: 'Humidity', rain_chance: 'Rain Chance', wind: 'Wind',
    // Farm cards
    north_field: 'North Field', south_field: 'South Field',
    wheat: 'Wheat', rice: 'Rice', cotton: 'Cotton', sugarcane: 'Sugarcane', corn: 'Corn',
    drought_risk: 'Drought Risk', healthy: 'Healthy', critical: 'Critical',
    ndvi: 'NDVI', moisture: 'Moisture', low: 'Low', optimal: 'Optimal',
    // Farms list
    search_farms: 'Search farms by name or crop…', no_farms_match: 'No farms match',
    // Farm detail
    health_score: 'Health Score', crop_type: 'Crop Type', satellite_view: 'Satellite View',
    ndvi_trend: 'NDVI Trend', view_intervention: 'View Intervention', last_update: 'Last Update',
    // Intervention
    ai_recommendation: 'AI RECOMMENDATION', irrigate: 'Irrigate immediately',
    moisture_critically_low: 'Moisture level critically low',
    irrigation: 'IRRIGATION', cost: 'COST', field_risk: 'FIELD RISK',
    ai_confidence: 'AI Confidence', why_intervention: 'Why this intervention?',
    expected_outcome: 'Expected Outcome', high_impact: 'High Impact',
    yield_improvement: 'Yield Improvement', roi: 'ROI',
    apply_intervention: 'Apply Intervention',
    // Insights
    trends_insights: 'Trends & Insights', ndvi_trend_tab: 'NDVI Trend',
    moisture_tab: 'Moisture', temperature_tab: 'Temperature',
    // Alerts
    alerts_title: 'Alerts', unread_alerts: '{n} Unread Alert', all_caught_up: 'All caught up!',
    clear_all: 'Clear All', active: 'Active', history: 'History',
    no_alerts: 'No {tab} alerts', full_details: 'Full Details', recommendation: 'Recommendation',
    // Profile
    edit: 'Edit', log_out: 'Log Out',
    farm_details: 'Farm Details', account_settings: 'Account Settings',
    notification_settings: 'Notification Settings', help_support: 'Help & Support',
    about: 'About CropSentinel',
    // Edit Profile
    edit_profile: 'Edit Profile', full_name: 'Full Name', phone_number: 'Phone Number',
    location: 'Location', change_photo: 'Change Photo', save_changes: 'Save Changes', saved: 'Saved!',
    // Settings
    settings: 'Account Settings', preferences: 'Preferences',
    units: 'Units', language: 'Language', theme: 'Theme',
    data_privacy: 'Data & Privacy', auto_sync: 'Auto-Sync Data',
    auto_sync_sub: 'Sync farm data in background',
    location_access: 'Location Access', location_sub: 'Required for satellite mapping',
    share_analytics: 'Share Analytics', share_sub: 'Help us improve CropSentinel',
    account: 'Account', change_password: 'Change Password',
    linked_devices: 'Linked Devices', export_data: 'Export My Data',
    delete_account: 'Delete Account',
    version: 'Version', rate_app: 'Rate the App',
    // Change Password
    change_password_title: 'Change Password',
    current_password: 'Current Password', new_password: 'New Password',
    confirm_password: 'Confirm Password', update_password: 'Update Password',
    password_updated: 'Password Updated!',
    passwords_no_match: 'New passwords do not match.',
    // Notifications
    channels: 'Channels', push_notif: 'Push Notifications',
    push_sub: 'Alerts on your device', email_alerts: 'Email Alerts',
    sms_alerts: 'SMS Alerts', alert_types: 'Alert Types',
    drought_alerts: 'Drought Risk Alerts', drought_sub: 'Soil moisture warnings',
    pest_alerts: 'Pest & Disease Alerts', pest_sub: 'Early detection reports',
    weather_warnings: 'Weather Warnings', weather_sub: 'Extreme weather events',
    ndvi_updates: 'NDVI Updates', ndvi_sub: 'Weekly health summaries',
    market_alerts: 'Market Price Alerts', market_sub: 'Mandi price changes',
    // Help & Support
    live_chat: 'Live Chat', avg_reply: 'Avg. 5 min reply',
    call_us: 'Call Us', email_us: 'Email Us',
    faq: 'Frequently Asked Questions',
    // Farm Details Config
    farm_details_title: 'Farm Details', farm_overview: 'Farm Overview',
    total_fields: 'Total Fields', total_area: 'Total Area', active_alerts: 'Alerts',
    soil_health: 'Soil Health', overall_ndvi: 'NDVI', good: 'Good',
    save: 'Save', cancel: 'Cancel', saving: 'Saving…',
    farm_name_label: 'Farm Name', location_label: 'Location', area_label: 'Area (acres)',
    // Add Field
    add_field_title: 'Add New Field', select_location: 'Select Location',
    tap_map: 'Tap on the map to drop a pin for your farm.',
    field_name: 'Field Name', crop_type_label: 'Select Crop Type', choose_crop: 'Choose crop',
    field_area: 'Field Area (Acres)', soil_type: 'Soil Type', choose_soil: 'Choose soil type',
    location_btn: 'Select on map', selected: 'Selected', confirm: 'Confirm',
    save_field: 'Save Field', saving_field: 'Saving…',
    validation_error: 'Please fill in Farm Name, Crop Type, and select a Location.',
    // About
    our_mission: 'Our Mission',
    mission_text: 'CropSentinel empowers farmers with satellite and AI tools. Our goal is to help every farmer make data-driven decisions — reducing crop losses, conserving water, and improving incomes.',
    technology: 'Technology',
  },

  hi: {
    // Nav
    home: 'होम', farms: 'खेत', insights: 'जानकारी', alerts: 'अलर्ट', profile: 'प्रोफ़ाइल',
    // Welcome
    get_started: 'शुरू करें', tagline: 'AI-संचालित कृषि बुद्धिमत्ता',
    // Login
    welcome_back: 'वापस स्वागत है! 👋', login_to_continue: 'जारी रखने के लिए लॉगिन करें',
    email_label: 'ईमेल', password_label: 'पासवर्ड',
    forgot_password: 'पासवर्ड भूल गए?', login_btn: 'लॉगिन',
    or_continue_with: 'या इससे जारी रखें', new_farmer: 'नए किसान?', create_account: 'खाता बनाएं',
    // Home
    good_morning: 'सुप्रभात,', farmer: 'किसान 🌿',
    heres_whats: 'आपके खेतों में क्या हो रहा है',
    my_farms: 'मेरे खेत', farms_alert: '{n} खेत • {a} अलर्ट',
    add_new_field: '+ नया खेत जोड़ें',
    temp: 'तापमान', humidity: 'नमी', rain_chance: 'बारिश की संभावना', wind: 'हवा',
    // Farm cards
    north_field: 'उत्तरी खेत', south_field: 'दक्षिणी खेत',
    wheat: 'गेहूं', rice: 'चावल', cotton: 'कपास', sugarcane: 'गन्ना', corn: 'मक्का',
    drought_risk: 'सूखे का खतरा', healthy: 'स्वस्थ', critical: 'गंभीर',
    ndvi: 'NDVI', moisture: 'नमी', low: 'कम', optimal: 'उचित',
    // Farms list
    search_farms: 'नाम या फसल से खेत खोजें…', no_farms_match: 'कोई खेत नहीं मिला',
    // Farm detail
    health_score: 'स्वास्थ्य स्कोर', crop_type: 'फसल का प्रकार', satellite_view: 'सैटेलाइट दृश्य',
    ndvi_trend: 'NDVI ट्रेंड', view_intervention: 'हस्तक्षेप देखें', last_update: 'अंतिम अपडेट',
    // Intervention
    ai_recommendation: 'AI अनुशंसा', irrigate: 'तुरंत सिंचाई करें',
    moisture_critically_low: 'नमी का स्तर गंभीर रूप से कम है',
    irrigation: 'सिंचाई', cost: 'लागत', field_risk: 'खेत का जोखिम',
    ai_confidence: 'AI विश्वास', why_intervention: 'यह हस्तक्षेप क्यों?',
    expected_outcome: 'अपेक्षित परिणाम', high_impact: 'उच्च प्रभाव',
    yield_improvement: 'उपज में सुधार', roi: 'ROI',
    apply_intervention: 'हस्तक्षेप लागू करें',
    // Insights
    trends_insights: 'रुझान और जानकारी', ndvi_trend_tab: 'NDVI ट्रेंड',
    moisture_tab: 'नमी', temperature_tab: 'तापमान',
    // Alerts
    alerts_title: 'अलर्ट', unread_alerts: '{n} अपठित अलर्ट', all_caught_up: 'सब पढ़ लिया!',
    clear_all: 'सब हटाएं', active: 'सक्रिय', history: 'इतिहास',
    no_alerts: 'कोई {tab} अलर्ट नहीं', full_details: 'पूरी जानकारी', recommendation: 'सिफारिश',
    // Profile
    edit: 'संपादित करें', log_out: 'लॉग आउट',
    farm_details: 'खेत विवरण', account_settings: 'खाता सेटिंग',
    notification_settings: 'सूचना सेटिंग', help_support: 'सहायता',
    about: 'CropSentinel के बारे में',
    // Edit Profile
    edit_profile: 'प्रोफ़ाइल संपादित करें', full_name: 'पूरा नाम', phone_number: 'फ़ोन नंबर',
    location: 'स्थान', change_photo: 'फ़ोटो बदलें', save_changes: 'बदलाव सहेजें', saved: 'सहेजा गया!',
    // Settings
    settings: 'खाता सेटिंग', preferences: 'प्राथमिकताएं',
    units: 'इकाई', language: 'भाषा', theme: 'थीम',
    data_privacy: 'डेटा और गोपनीयता', auto_sync: 'ऑटो-सिंक डेटा',
    auto_sync_sub: 'पृष्ठभूमि में खेत डेटा सिंक करें',
    location_access: 'स्थान पहुंच', location_sub: 'सैटेलाइट मैपिंग के लिए आवश्यक',
    share_analytics: 'Analytics साझा करें', share_sub: 'CropSentinel को बेहतर बनाने में मदद करें',
    account: 'खाता', change_password: 'पासवर्ड बदलें',
    linked_devices: 'जुड़े उपकरण', export_data: 'मेरा डेटा निर्यात करें',
    delete_account: 'खाता हटाएं',
    version: 'संस्करण', rate_app: 'ऐप को रेट करें',
    // Change Password
    change_password_title: 'पासवर्ड बदलें',
    current_password: 'वर्तमान पासवर्ड', new_password: 'नया पासवर्ड',
    confirm_password: 'पासवर्ड की पुष्टि करें', update_password: 'पासवर्ड अपडेट करें',
    password_updated: 'पासवर्ड अपडेट हो गया!',
    passwords_no_match: 'नए पासवर्ड मेल नहीं खाते।',
    // Notifications
    channels: 'चैनल', push_notif: 'पुश सूचनाएं',
    push_sub: 'आपके डिवाइस पर अलर्ट', email_alerts: 'ईमेल अलर्ट',
    sms_alerts: 'SMS अलर्ट', alert_types: 'अलर्ट प्रकार',
    drought_alerts: 'सूखे के अलर्ट', drought_sub: 'मिट्टी की नमी की चेतावनियाँ',
    pest_alerts: 'कीट अलर्ट', pest_sub: 'शीघ्र पहचान रिपोर्ट',
    weather_warnings: 'मौसम चेतावनियाँ', weather_sub: 'अत्यधिक मौसम घटनाएं',
    ndvi_updates: 'NDVI अपडेट', ndvi_sub: 'साप्ताहिक स्वास्थ्य सारांश',
    market_alerts: 'बाजार मूल्य अलर्ट', market_sub: 'मंडी मूल्य परिवर्तन',
    // Farm Details Config
    farm_details_title: 'खेत विवरण', farm_overview: 'खेत का अवलोकन',
    total_fields: 'कुल खेत', total_area: 'कुल क्षेत्र', active_alerts: 'अलर्ट',
    soil_health: 'मिट्टी का स्वास्थ्य', overall_ndvi: 'NDVI', good: 'अच्छा',
    save: 'सहेजें', cancel: 'रद्द करें', saving: 'सहेज रहे हैं…',
    farm_name_label: 'खेत का नाम', location_label: 'स्थान', area_label: 'क्षेत्र (एकड़)',
    // Add Field
    add_field_title: 'नया खेत जोड़ें', select_location: 'स्थान चुनें',
    tap_map: 'अपने खेत के लिए नक्शे पर टैप करें।',
    field_name: 'खेत का नाम', crop_type_label: 'फसल का प्रकार चुनें', choose_crop: 'फसल चुनें',
    field_area: 'खेत का क्षेत्र (एकड़)', soil_type: 'मिट्टी का प्रकार', choose_soil: 'मिट्टी का प्रकार चुनें',
    location_btn: 'नक्शे पर चुनें', selected: 'चुना गया', confirm: 'पुष्टि करें',
    save_field: 'खेत सहेजें', saving_field: 'सहेज रहे हैं…',
    validation_error: 'कृपया खेत का नाम, फसल का प्रकार और स्थान भरें।',
    // About
    our_mission: 'हमारा मिशन',
    mission_text: 'CropSentinel किसानों को सैटेलाइट और AI टूल देता है। हमारा लक्ष्य हर किसान को डेटा-आधारित निर्णय लेने में मदद करना है।',
    technology: 'तकनीक',
  },

  gu: {
    // Nav
    home: 'હોમ', farms: 'ખેત', insights: 'આંતરદૃષ્ટિ', alerts: 'ચેતવણી', profile: 'પ્રોફાઇલ',
    // Welcome
    get_started: 'શરૂ કરો', tagline: 'AI-સંચાલિત ખેત બુદ્ધિ',
    // Login
    welcome_back: 'પાછા આવ્યા! 👋', login_to_continue: 'ચાલુ રાખવા લૉગિન કરો',
    email_label: 'ઇમેઇલ', password_label: 'પાસવર્ડ',
    forgot_password: 'પાસવર્ડ ભૂલ્યા?', login_btn: 'લૉગિન',
    or_continue_with: 'અથવા આ સાથે ચાલુ રાખો', new_farmer: 'નવા ખેડૂત?', create_account: 'એકાઉન્ટ બનાવો',
    // Home
    good_morning: 'સુપ્રભાત,', farmer: 'ખેડૂત 🌿',
    heres_whats: 'તમારા ખેતરોમાં શું ચાલી રહ્યું છે',
    my_farms: 'મારા ખેત', farms_alert: '{n} ખેત • {a} ચેતવણી',
    add_new_field: '+ નવું ખેત ઉમેરો',
    temp: 'તાપમાન', humidity: 'ભeज', rain_chance: 'વરસાદ ની સ્ભાvna', wind: 'પvn',
    // Farm cards
    north_field: 'ઉત્તર ખેત', south_field: 'દક્ષિણ ખેત',
    wheat: 'ઘઉં', rice: 'ચોખા', cotton: 'કpas', sugarcane: 'શhercane', corn: 'makkI',
    drought_risk: 'દુષ્કાળ જોખમ', healthy: 'સ્વ5th', critical: 'ગ9ભir',
    ndvi: 'NDVI', moisture: 'ભeज', low: 'ઓchhI', optimal: 'ycit',
    // Farms list
    search_farms: 'નામ અથવા પaK થી ખeت ш0d0…', no_farms_match: 'ко 1 ખeت м1 dh0',
    // Farm detail
    health_score: 'sWth: skor', crop_type: 'pAk nо prKar', satellite_view: 's+lAit dRshy',
    ndvi_trend: 'NDVI tr?d', view_intervention: 'h5tK5P juo', last_update: 'c0lTu ApDet',
    // Intervention
    ai_recommendation: 'AI BAzucNI', irrigate: 'tErMt is@caI kro',
    moisture_critically_low: 'nh5mInI m{v+ gNbhIr rIte оca ch7',
    irrigation: 'is@caI', cost: 'kcr', field_risk: 'K5trAno joK8m',
    ai_confidence: 'AI iWws3as', why_intervention: 'Au h5tK5P q0 ?',
    expected_outcome: 'ApEiKSt p1riNAm', high_impact: 'moTo p1rBav',
    yield_improvement: 'WT0ADnI s8DHr', roi: 'ROI',
    apply_intervention: 'h5tK5P lAgo kro',
    // Insights
    trends_insights: 'dANTn aw aAmt8rdRS2i', ndvi_trend_tab: 'NDVI Trend',
    moisture_tab: 'nh5mI', temperature_tab: 'tApMAn',
    // Alerts
    alerts_title: 'c7tvNI', unread_alerts: '{n} n ApcitR c7tvNI', all_caught_up: 'sv wancyu !',
    clear_all: 'sv hTAo', active: 'sik3y', history: 'etihAs',
    no_alerts: 'ko 1 {tab} c7tvNI нет', full_details: 'pUrI m3ihti', recommendation: 'BAzucNI',
    // Profile
    edit: 's5Pai3t', log_out: 'log aAWT',
    farm_details: 'K5t ivgto', account_settings: 'Ek3Aant s7Ti5g',
    notification_settings: 'sUcnA s7Ti5g', help_support: 'mdd',
    about: 'CropSentinel ivishe',
    // Edit Profile
    edit_profile: 'pRoFAIl s5PAit kro', full_name: 'pUrU nAm', phone_number: 'Fon n5br',
    location: 'sTHan', change_photo: 'Foto BDlo', save_changes: 'BDlAv sBjo', saved: 'sBjAyu!',
    // Settings
    settings: 'Ek3Aant s7Ti5g', preferences: 'pEsAd',
    units: 'ekk', language: 'BAzA', theme: 'THim',
    data_privacy: 'DeTa aw gopnIytA', auto_sync: 'oTo-is5k DeTa',
    auto_sync_sub: 'PasthBUmimA5 K5trono DeTa is5k kro',
    location_access: 'sTHan pkD', location_sub: 's+lAit m7pi5g mAte jrUrI',
    share_analytics: 'AEnAlIiTks шekro', share_sub: 'CropSentinel sBrAvvAmA5 mdd kro',
    account: 'Ek3Aant', change_password: 'p3AsworD BDlo',
    linked_devices: 'joDAyelA sADnо', export_data: 'merо DeTa inrыkAso',
    delete_account: 'Ek3Aant kADI nAKo',
    version: 's5skrN', rate_app: 'A?p rET kro',
    // Change Password
    change_password_title: 'p3AsworD BDlo',
    current_password: 'hAlno p3AsworD', new_password: 'nvo p3AsworD',
    confirm_password: 'p3AsworD piST kro', update_password: 'p3AsworD ApDet kro',
    password_updated: 'p3AsworD ApDet tyu !',
    passwords_no_match: 'nvA p3AsworD mel KAto nTI.',
    // Notifications
    channels: 'cEnl', push_notif: 'puS sUcnA',
    push_sub: 'tumArA DivaIs par A7lrT', email_alerts: 'IMEl A5lr5T',
    sms_alerts: 'SMS A5lr5T', alert_types: 'A5lr5T p1rkAr',
    drought_alerts: 'd8kAl A5lr5T', drought_sub: 'm3I nNhI c7tvNI',
    pest_alerts: 'KimI A5lr5T', pest_sub: 'SkDI sMIKSA r7porT',
    weather_warnings: 'm5sM c7tvNI', weather_sub: 'kruk m5sM GutnAo',
    ndvi_updates: 'NDVI ApDeT', ndvi_sub: 'sAptA3iK sAro sAr',
    market_alerts: 'BAjAr B3Av A5lr5T', market_sub: 'm5DI B3Av Bdl3Ao',
    // Farm Details Config
    farm_details_title: 'K5t ivgto', farm_overview: 'K5tnI S5h1lAt',
    total_fields: 'k8l K5to', total_area: 'k8l ivsTAr', active_alerts: 'A5lr5T',
    soil_health: 'm3InI tNd8rStI', overall_ndvi: 'NDVI', good: 's3rS',
    save: 's3Bjo', cancel: 'r3D kro', saving: 'sBjI r3hА ch7…',
    farm_name_label: 'K5tn8 nAm', location_label: 'sTHan', area_label: 'ivsTAr (ekD)',
    // Add Field
    add_field_title: 'nvu K5t umer o', select_location: 'sTHan p3s5d kro',
    tap_map: 'tumArA K5t mAte nkSA pr T3P kro.',
    field_name: 'K5t n8 nAm', crop_type_label: 'pAk n8 p1rkAr p3s5d kro', choose_crop: 'pAk p3s5d kro',
    field_area: 'K5tn8 ivsTAr (ekD)', soil_type: 'm3I n8 p1rkAr', choose_soil: 'm3I p1rkAr p3s5d kro',
    location_btn: 'nkSA pr p3s5d kro', selected: 'p3s5d', confirm: 'p3iSTkrN',
    save_field: 'K5t sBjo', saving_field: 'sBjI r3hА ch7…',
    validation_error: 'krpA krine K5tn8 nAm, pAk n8 p1rkAr aw sTHan BrP.',
    // About
    our_mission: 'AmArU mizn',
    mission_text: 'CropSentinel K5DUtone s3TelaIT aw AI tUls A5pe ch7. AmAro LD hR K5DUTne DeTA-ADArIt nir3y levAmA5 mdd krvAnо ch7.',
    technology: 'tek5nolojI',
  },
};

/**
 * Translation function factory
 */
export function makeT(language) {
  const lang = translations[language] || translations.en;
  return (key, params = {}) => {
    let str = lang[key] || translations.en[key] || key;
    Object.entries(params).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, v);
    });
    return str;
  };
}
