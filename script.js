// ==================== DEFAULT SAMPLE ACTIVITIES (MATCHING IMAGE.PNG) ====================
const SAMPLE_ACTIVITIES = [
  { description: 'PERBAIKAN PINTU UTAMA RI 106', idr: 1200000, usd: '' },
  { description: 'PEMBELIAN TANAMAN DAN MEDIA TANAM (ROOFTOP)', idr: 1940000, usd: '' },
  { description: 'PERBAIKAN SALURAN AIR RI 106 & JASA PERBAIKAN', idr: 860000, usd: '' }
];

// ==================== INITIAL DATA (MATCHING STEP 2.JPEG & PDF DETAILS) ====================
const INITIAL_PPBJ_DATA = [
  {
    id: 1,
    nomorPengajuan: '300009B8344AB',
    nomorPpbj: '00026091230604',
    tanggalPpbj: '2026-09-07',
    referensiPpbj: '059999920260907',
    lawanTransaksi: 'ELNUSA TBK.',
    objekTransaksi: 'JKP',
    status: 'Penerimaan Data di DJP',
    statusColor: 'yellow',
    hasGreenDocBtn: true,
    details: {
      divisi: 'ELNUSA FABRIKASI KONSTRUKSI',
      jenisDokumen: 'PANJAR KERJA',
      responsible: 'TRI KOMALANINGRUM AJI',
      businessArea: 'Business Support',
      project: 'PERBAIKAN FASILITAS KANTOR RI 106',
      costCenter: '200-H-EFK',
      projectActivity: 'OFFICE FACILITIES',
      glAccount: '7190300000',
      glKet: '',
      specialGl: 'E',
      nomorSurat: '019/PK-COM/GS/I/2026',
      tanggalSurat: '13/10/2026',
      period: 'Oktober 2026',
      contactPerson: 'Tri Komalaningrum',
      rekening: 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI',
      disposisi: '',
      lawanNama: 'ELNUSA TBK.',
      signDisetujui: 'Ari Wijaya',
      signMengetahui: 'Aditya',
      signDiajukan: 'Rina Wirastuti',
      signDibuat: 'Tri Komalaningrum',
      kota: 'Jakarta',
      tanggalTtd: '13-Oct-26',
      activities: SAMPLE_ACTIVITIES.map((x) => ({ ...x }))
    }
  },
  {
    id: 2,
    nomorPengajuan: '300009B66DE6A',
    nomorPpbj: '00026071189931',
    tanggalPpbj: '2026-07-21',
    referensiPpbj: '059999920260721',
    lawanTransaksi: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
    objekTransaksi: 'JKP',
    status: 'Terima Faktur Pajak',
    statusColor: 'green',
    hasGreenDocBtn: false,
    details: {
      divisi: 'ELNUSA FABRIKASI KONSTRUKSI',
      jenisDokumen: 'PANJAR KERJA',
      responsible: 'TRI KOMALANINGRUM AJI',
      businessArea: 'Business Support',
      project: 'INSPEKSI & SERTIFIKASI FASILITAS WORKSHOP',
      costCenter: '200-H-EFK',
      projectActivity: 'OFFICE FACILITIES',
      glAccount: '7190300000',
      glKet: '',
      specialGl: 'E',
      nomorSurat: '014/PK-COM/GS/VII/2026',
      tanggalSurat: '21/07/2026',
      period: 'Juli 2026',
      contactPerson: 'Tri Komalaningrum',
      rekening: 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI',
      disposisi: '',
      lawanNama: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
      signDisetujui: 'Ari Wijaya',
      signMengetahui: 'Aditya',
      signDiajukan: 'Rina Wirastuti',
      signDibuat: 'Tri Komalaningrum',
      kota: 'Jakarta',
      tanggalTtd: '21-Jul-26',
      activities: SAMPLE_ACTIVITIES.map((x) => ({ ...x }))
    }
  },
  {
    id: 3,
    nomorPengajuan: '300009B66DE5B',
    nomorPpbj: '00026071189918',
    tanggalPpbj: '2026-07-21',
    referensiPpbj: '059999920260721',
    lawanTransaksi: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
    objekTransaksi: 'JKP',
    status: 'Terima Faktur Pajak',
    statusColor: 'green',
    hasGreenDocBtn: false,
    details: {
      divisi: 'ELNUSA FABRIKASI KONSTRUKSI',
      jenisDokumen: 'PERMINTAAN BAYAR',
      responsible: 'TRI KOMALANINGRUM AJI',
      businessArea: 'Business Support',
      project: 'PERBAIKAN FASILITAS KANTOR RI 106',
      costCenter: '200-H-EFK',
      projectActivity: 'OFFICE FACILITIES',
      glAccount: '7190300000',
      glKet: '',
      specialGl: 'E',
      nomorSurat: '015/PB-COM/GS/VII/2026',
      tanggalSurat: '21/07/2026',
      period: 'Juli 2026',
      contactPerson: 'Tri Komalaningrum',
      rekening: 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI',
      disposisi: '',
      lawanNama: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
      signDisetujui: 'Ari Wijaya',
      signMengetahui: 'Aditya',
      signDiajukan: 'Rina Wirastuti',
      signDibuat: 'Tri Komalaningrum',
      kota: 'Jakarta',
      tanggalTtd: '21-Jul-26',
      activities: SAMPLE_ACTIVITIES.map((x) => ({ ...x }))
    }
  }
];

let ppbjList = [...INITIAL_PPBJ_DATA];
let editingItemId = null;
let currentActivities = SAMPLE_ACTIVITIES.map((x) => ({ ...x }));

// ==================== NAVIGATION BETWEEN STEPS ====================
function showStep(stepId) {
  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === stepId);
  });

  document.querySelectorAll('.step-pill-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.target === stepId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 3200);
}

// ==================== RENDER STEP 2 TABLE ====================
function getActionButtonsHtml(item) {
  const greenDocBtn = item.hasGreenDocBtn
    ? `<button type="button" class="aksi-btn aksi-green" data-action="doc" data-id="${item.id}" title="Cetak Dokumen PK/PB">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
        </svg>
      </button>`
    : '';

  return `
    <div class="aksi-group">
      <button type="button" class="aksi-btn aksi-navy" data-action="expand" data-id="${item.id}" title="Rincian">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="aksi-btn aksi-navy" data-action="view" data-id="${item.id}" title="Lihat / Edit Form PK/PB">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
      </button>
      <button type="button" class="aksi-btn aksi-navy" data-action="send" data-id="${item.id}" title="Kirim / Proses">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      </button>
      <button type="button" class="aksi-btn aksi-orange" data-action="cancel" data-id="${item.id}" title="Batalkan">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="12" cy="12" r="8"/>
          <path d="M6.5 6.5l11 11"/>
        </svg>
      </button>
      <button type="button" class="aksi-btn aksi-orange" data-action="history" data-id="${item.id}" title="Riwayat Status">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path d="M3 12a9 9 0 1 0 3-6.7L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      </button>
      <button type="button" class="aksi-btn aksi-orange" data-action="partner" data-id="${item.id}" title="Data Pengajuan">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      </button>
      ${greenDocBtn}
      <button type="button" class="aksi-btn aksi-gray" data-action="download" data-id="${item.id}" title="Cetak / Unduh PDF PK/PB">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
        </svg>
      </button>
    </div>
  `;
}

function renderPpbjTable(filterQuery = '') {
  const tbody = document.getElementById('ppbj-table-body');
  if (!tbody) return;

  const q = filterQuery.trim().toLowerCase();
  const filtered = ppbjList.filter((item) => {
    if (!q) return true;
    return (
      item.nomorPengajuan.toLowerCase().includes(q) ||
      item.referensiPpbj.toLowerCase().includes(q) ||
      item.lawanTransaksi.toLowerCase().includes(q) ||
      item.status.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="padding: 28px; color: #64748b;">Tidak ada data yang sesuai dengan pencarian.</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered
    .map((item, idx) => {
      const ringClass = item.statusColor === 'yellow' ? 'ring-yellow' : 'ring-green';
      return `
        <tr>
          <td>${idx + 1}</td>
          <td>${item.nomorPengajuan}</td>
          <td>${item.tanggalPpbj}</td>
          <td>${item.referensiPpbj}</td>
          <td>${item.lawanTransaksi}</td>
          <td>${item.objekTransaksi}</td>
          <td>
            <span class="status-cell">
              <span class="status-ring ${ringClass}"></span>
              <span>${item.status}</span>
            </span>
          </td>
          <td>${getActionButtonsHtml(item)}</td>
        </tr>
      `;
    })
    .join('');
}
// ==================== NUMBER FORMATTING & ACTIVITY ROWS ====================
function parseCurrencyNumber(val) {
  if (typeof val === 'number') return Number.isFinite(val) ? val : 0;
  const cleaned = String(val || '').replace(/[^\d]/g, '');
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function formatDotNumber(num) {
  const n = parseCurrencyNumber(num);
  if (!n) return '';
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function renderActivityRows() {
  const tbody = document.getElementById('activity-rows-body');
  if (!tbody) return;

  if (!Array.isArray(currentActivities) || currentActivities.length === 0) {
    currentActivities = [{ description: '', idr: '', usd: '' }];
  }

  tbody.innerHTML = currentActivities
    .map(
      (row, idx) => `
      <tr data-row-index="${idx}">
        <td class="cell-no">${idx + 1}</td>
        <td>
          <input type="text" class="activity-row-input" data-field="description" data-index="${idx}" value="${(row.description || '').replace(/"/g, '&quot;')}" placeholder="Contoh: PERBAIKAN PINTU UTAMA RI 106" />
        </td>
        <td>
          <input type="text" class="activity-row-input num-input" data-field="idr" data-index="${idx}" value="${row.idr ? formatDotNumber(row.idr) : ''}" placeholder="1.200.000" />
        </td>
        <td>
          <input type="text" class="activity-row-input num-input" data-field="usd" data-index="${idx}" value="${row.usd ? formatDotNumber(row.usd) : ''}" placeholder="" />
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn-remove-activity" data-remove-index="${idx}" title="Hapus baris">&times;</button>
        </td>
      </tr>
    `
    )
    .join('');

  updateActivityTotals();
}

function updateActivityTotals() {
  const sumIdr = currentActivities.reduce((acc, r) => acc + parseCurrencyNumber(r.idr), 0);
  const sumUsd = currentActivities.reduce((acc, r) => acc + parseCurrencyNumber(r.usd), 0);

  const idrEl = document.getElementById('activity-sum-idr');
  const usdEl = document.getElementById('activity-sum-usd');
  if (idrEl) idrEl.textContent = sumIdr ? formatDotNumber(sumIdr) : '0';
  if (usdEl) usdEl.textContent = sumUsd ? formatDotNumber(sumUsd) : '';
}

// ==================== STEP 3 FORM POPULATION & SUBMISSION ====================
function resetStep3Form() {
  editingItemId = null;
  const form = document.getElementById('form-ppbj');
  if (form) form.reset();

  const divisiEl = document.getElementById('pk-divisi');
  if (divisiEl) divisiEl.value = 'ELNUSA FABRIKASI KONSTRUKSI';

  currentActivities = [
    { description: '', idr: '', usd: '' },
    { description: '', idr: '', usd: '' },
    { description: '', idr: '', usd: '' }
  ];
  renderActivityRows();
  activateWizardTab('perusahaan');
}

function populateStep3Form(item) {
  editingItemId = item.id;
  const d = item.details || {};

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val !== undefined && val !== null ? val : '';
  };

  setVal('pk-divisi', d.divisi || 'ELNUSA FABRIKASI KONSTRUKSI');
  setVal('pk-jenis-dokumen', d.jenisDokumen || 'PANJAR KERJA');
  setVal('pk-responsible', d.responsible || 'TRI KOMALANINGRUM AJI');
  setVal('pk-business-area', d.businessArea || 'Business Support');
  setVal('pk-project', d.project || 'PERBAIKAN FASILITAS KANTOR RI 106');
  setVal('pk-cost-center', d.costCenter || '200-H-EFK');
  setVal('pk-project-activity', d.projectActivity || 'OFFICE FACILITIES');
  setVal('pk-gl-account', d.glAccount || '7190300000');
  setVal('pk-gl-ket', d.glKet || '');
  setVal('pk-special-gl', d.specialGl || 'E');

  setVal('pk-nomor-surat', d.nomorSurat || '019/PK-COM/GS/I/2026');
  setVal('pk-tanggal-surat', d.tanggalSurat || '13/10/2026');
  setVal('pk-period', d.period || 'Oktober 2026');
  setVal('pk-contact-person', d.contactPerson || 'Tri Komalaningrum');
  setVal('pk-rekening', d.rekening || 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI');
  setVal('pk-disposisi', d.disposisi || '');

  setVal('lawan-nama', d.lawanNama || item.lawanTransaksi || 'ELNUSA TBK.');
  setVal('kontrak-objek-quick', item.objekTransaksi || 'JKP');

  setVal('pk-sign-disetujui', d.signDisetujui || 'Ari Wijaya');
  setVal('pk-sign-mengetahui', d.signMengetahui || 'Aditya');
  setVal('pk-sign-diajukan', d.signDiajukan || 'Rina Wirastuti');
  setVal('pk-sign-dibuat', d.signDibuat || 'Tri Komalaningrum');
  setVal('pk-kota', d.kota || 'Jakarta');
  setVal('pk-tanggal-ttd', d.tanggalTtd || '13-Oct-26');

  currentActivities = Array.isArray(d.activities) && d.activities.length > 0
    ? d.activities.map((x) => ({ ...x }))
    : SAMPLE_ACTIVITIES.map((x) => ({ ...x }));
  renderActivityRows();
  activateWizardTab('perusahaan');
}

function fillSampleDataStep3() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setVal('pk-divisi', 'ELNUSA FABRIKASI KONSTRUKSI');
  setVal('pk-jenis-dokumen', 'PANJAR KERJA');
  setVal('pk-responsible', 'TRI KOMALANINGRUM AJI');
  setVal('pk-business-area', 'Business Support');
  setVal('pk-project', 'PERBAIKAN FASILITAS KANTOR RI 106');
  setVal('pk-cost-center', '200-H-EFK');
  setVal('pk-project-activity', 'OFFICE FACILITIES');
  setVal('pk-gl-account', '7190300000');
  setVal('pk-gl-ket', '');
  setVal('pk-special-gl', 'E');

  setVal('pk-nomor-surat', '019/PK-COM/GS/I/2026');
  setVal('pk-tanggal-surat', '13/10/2026');
  setVal('pk-period', 'Oktober 2026');
  setVal('pk-contact-person', 'Tri Komalaningrum');
  setVal('pk-rekening', 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI');
  setVal('pk-disposisi', '');

  setVal('lawan-nama', 'ELNUSA TBK.');
  setVal('kontrak-objek-quick', 'JKP');

  setVal('pk-sign-disetujui', 'Ari Wijaya');
  setVal('pk-sign-mengetahui', 'Aditya');
  setVal('pk-sign-diajukan', 'Rina Wirastuti');
  setVal('pk-sign-dibuat', 'Tri Komalaningrum');
  setVal('pk-kota', 'Jakarta');
  setVal('pk-tanggal-ttd', '13-Oct-26');

  currentActivities = SAMPLE_ACTIVITIES.map((x) => ({ ...x }));
  renderActivityRows();

  showToast('Contoh data Panjar Kerja berhasil diisi otomatis sesuai format PDF.');
}

function getFormDetailsFromInputs() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };

  const cleanedActivities = currentActivities
    .map((r) => ({
      description: (r.description || '').trim(),
      idr: parseCurrencyNumber(r.idr),
      usd: parseCurrencyNumber(r.usd)
    }))
    .filter((r) => r.description || r.idr || r.usd);

  return {
    divisi: getVal('pk-divisi') || 'ELNUSA FABRIKASI KONSTRUKSI',
    jenisDokumen: getVal('pk-jenis-dokumen') || 'PANJAR KERJA',
    responsible: getVal('pk-responsible') || 'TRI KOMALANINGRUM AJI',
    businessArea: getVal('pk-business-area') || 'Business Support',
    project: getVal('pk-project') || 'PERBAIKAN FASILITAS KANTOR RI 106',
    costCenter: getVal('pk-cost-center') || '200-H-EFK',
    projectActivity: getVal('pk-project-activity') || 'OFFICE FACILITIES',
    glAccount: getVal('pk-gl-account') || '7190300000',
    glKet: getVal('pk-gl-ket') || '',
    specialGl: getVal('pk-special-gl') || 'E',
    nomorSurat: getVal('pk-nomor-surat') || '019/PK-COM/GS/I/2026',
    tanggalSurat: getVal('pk-tanggal-surat') || '13/10/2026',
    period: getVal('pk-period') || 'Oktober 2026',
    contactPerson: getVal('pk-contact-person') || 'Tri Komalaningrum',
    rekening: getVal('pk-rekening') || 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI',
    disposisi: getVal('pk-disposisi') || '',
    lawanNama: getVal('lawan-nama') || 'ELNUSA TBK.',
    objekTransaksi: getVal('kontrak-objek-quick') || getVal('kontrak-objek') || 'JKP',
    signDisetujui: getVal('pk-sign-disetujui') || 'Ari Wijaya',
    signMengetahui: getVal('pk-sign-mengetahui') || 'Aditya',
    signDiajukan: getVal('pk-sign-diajukan') || 'Rina Wirastuti',
    signDibuat: getVal('pk-sign-dibuat') || 'Tri Komalaningrum',
    kota: getVal('pk-kota') || 'Jakarta',
    tanggalTtd: getVal('pk-tanggal-ttd') || '13-Oct-26',
    activities: cleanedActivities.length > 0 ? cleanedActivities : SAMPLE_ACTIVITIES.map((x) => ({ ...x }))
  };
}

function formatSignName(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return '(..............................)';
  if (trimmed.startsWith('(') && trimmed.endsWith(')')) return trimmed;
  return `(${trimmed})`;
}

function populatePrintSheetFromData(d) {
  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('print-doc-title', d.jenisDokumen || 'PANJAR KERJA');
  setTxt('print-divisi', d.divisi || 'ELNUSA FABRIKASI KONSTRUKSI');
  setTxt('print-responsible', d.responsible || 'TRI KOMALANINGRUM AJI');
  setTxt('print-business-area', d.businessArea || 'Business Support');
  setTxt('print-project', d.project || 'PERBAIKAN FASILITAS KANTOR RI 106');

  setTxt('print-nomor-surat', d.nomorSurat || '019/PK-COM/GS/I/2026');
  setTxt('print-tanggal-surat', d.tanggalSurat || '13/10/2026');
  setTxt('print-period', d.period || 'Oktober 2026');

  const rows = Array.isArray(d.activities) && d.activities.length > 0
    ? d.activities
    : SAMPLE_ACTIVITIES;

  const rowCount = rows.length;
  const tbody = document.getElementById('print-items-tbody');
  if (tbody) {
    tbody.innerHTML = rows
      .map((item, idx) => {
        const mergedCells =
          idx === 0
            ? `
              <td rowspan="${rowCount}" class="pk-cell-center">${d.costCenter || '200-H-EFK'}</td>
              <td rowspan="${rowCount}" class="pk-cell-center">${d.projectActivity || 'OFFICE FACILITIES'}</td>
              <td rowspan="${rowCount}" class="pk-cell-center">${d.glAccount || '7190300000'}</td>
              <td rowspan="${rowCount}" class="pk-cell-center">${d.glKet || ''}</td>
              <td rowspan="${rowCount}" class="pk-cell-center">${d.specialGl || 'E'}</td>
            `
            : '';

        const usdCell =
          idx === 0
            ? `<td rowspan="${rowCount}" class="pk-cell-right">${rows.some((r) => parseCurrencyNumber(r.usd) > 0) ? formatDotNumber(item.usd) : ''}</td>`
            : '';

        return `
          <tr>
            <td class="pk-cell-center">${idx + 1}</td>
            <td>${item.description || ''}</td>
            ${mergedCells}
            <td class="pk-cell-right">${parseCurrencyNumber(item.idr) ? formatDotNumber(item.idr) : ''}</td>
            ${usdCell}
          </tr>
        `;
      })
      .join('');
  }

  const totalIdr = rows.reduce((sum, r) => sum + parseCurrencyNumber(r.idr), 0);
  const totalUsd = rows.reduce((sum, r) => sum + parseCurrencyNumber(r.usd), 0);
  setTxt('print-total-idr', totalIdr ? formatDotNumber(totalIdr) : '');
  setTxt('print-total-usd', totalUsd ? formatDotNumber(totalUsd) : '');

  setTxt('print-disposisi', d.disposisi || '');
  setTxt('print-contact-person', d.contactPerson || 'Tri Komalaningrum');
  setTxt('print-rekening', d.rekening || 'MANDIRI 1370004329856 a/n TRI KOMALANINGRUM AJI');

  const kota = d.kota || 'Jakarta';
  const tglTtd = d.tanggalTtd || '13-Oct-26';
  setTxt('print-kota-tanggal', `${kota},  ${tglTtd}`);

  setTxt('print-sign-disetujui', formatSignName(d.signDisetujui || 'Ari Wijaya'));
  setTxt('print-sign-mengetahui', formatSignName(d.signMengetahui || 'Aditya'));
  setTxt('print-sign-diajukan', formatSignName(d.signDiajukan || 'Rina Wirastuti'));
  setTxt('print-sign-dibuat', formatSignName(d.signDibuat || 'Tri Komalaningrum'));
}

function triggerPrintPdf(detailsData) {
  populatePrintSheetFromData(detailsData);
  window.print();
}

function activateWizardTab(tabKey) {
  document.querySelectorAll('.wizard-tab').forEach((btn) => {
    const isMatch = btn.dataset.tab === tabKey;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });

  document.querySelectorAll('.tab-pane').forEach((pane) => {
    const isMatch = pane.id === `tab-${tabKey}`;
    pane.classList.toggle('active', isMatch);
    pane.hidden = !isMatch;
  });
}
// ==================== INITIALIZATION & EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
  renderPpbjTable();
  renderActivityRows();

  document.querySelectorAll('.step-pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      showStep(btn.dataset.target);
    });
  });

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('login-username');
      const uname = usernameInput && usernameInput.value.trim() ? usernameInput.value.trim() : 'Pengguna NSWid';
      showToast(`Selamat datang, ${uname}! Berhasil masuk ke Beranda Permohonan.`);
      showStep('step-2');
    });
  }

  const passkeyBtn = document.getElementById('btn-passkey-login');
  if (passkeyBtn) {
    passkeyBtn.addEventListener('click', () => {
      showToast('Autentikasi Passkey berhasil! Mengarahkan ke Beranda Permohonan...');
      showStep('step-2');
    });
  }

  const toggleSearchBtn = document.getElementById('btn-toggle-search');
  const searchWrap = document.getElementById('search-box-wrap');
  const searchInput = document.getElementById('table-search-input');
  if (toggleSearchBtn && searchWrap && searchInput) {
    toggleSearchBtn.addEventListener('click', () => {
      searchWrap.hidden = !searchWrap.hidden;
      if (!searchWrap.hidden) {
        searchInput.focus();
      } else {
        searchInput.value = '';
        renderPpbjTable('');
      }
    });

    searchInput.addEventListener('input', (e) => {
      renderPpbjTable(e.target.value);
    });
  }

  const addPpbjBtn = document.getElementById('btn-add-ppbj');
  if (addPpbjBtn) {
    addPpbjBtn.addEventListener('click', () => {
      resetStep3Form();
      showStep('step-3');
    });
  }

  const tableBody = document.getElementById('ppbj-table-body');
  if (tableBody) {
    tableBody.addEventListener('click', (e) => {
      const btn = e.target.closest('.aksi-btn');
      if (!btn) return;
      const id = Number(btn.dataset.id);
      const action = btn.dataset.action;
      const item = ppbjList.find((x) => x.id === id);
      if (!item) return;

      if (action === 'view' || action === 'expand' || action === 'partner') {
        populateStep3Form(item);
        showStep('step-3');
        showToast(`Membuka data pengajuan ${item.nomorPengajuan}`);
      } else if (action === 'send') {
        item.status = 'Terima Faktur Pajak';
        item.statusColor = 'green';
        renderPpbjTable(searchInput ? searchInput.value : '');
        showToast(`Pengajuan ${item.nomorPengajuan} berhasil dikirim/diproses.`);
      } else if (action === 'cancel') {
        if (confirm(`Apakah Anda yakin ingin membatalkan/menghapus pengajuan ${item.nomorPengajuan}?`)) {
          ppbjList = ppbjList.filter((x) => x.id !== id);
          renderPpbjTable(searchInput ? searchInput.value : '');
          showToast(`Pengajuan ${item.nomorPengajuan} telah dibatalkan.`);
        }
      } else if (action === 'history') {
        showToast(`Riwayat ${item.nomorPengajuan}: Status "${item.status}" (${item.tanggalPpbj})`);
      } else if (action === 'doc' || action === 'download') {
        showToast(`Menyiapkan cetakan PDF pengajuan ${item.nomorPengajuan}...`);
        triggerPrintPdf(item.details || {});
      }
    });
  }
  const backBtn = document.getElementById('btn-back-to-ppbj');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showStep('step-2');
    });
  }

  document.querySelectorAll('.wizard-tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      activateWizardTab(tabBtn.dataset.tab);
    });
  });

  const addActivityBtn = document.getElementById('btn-add-activity-row');
  if (addActivityBtn) {
    addActivityBtn.addEventListener('click', () => {
      currentActivities.push({ description: '', idr: '', usd: '' });
      renderActivityRows();
    });
  }

  const activityRowsBody = document.getElementById('activity-rows-body');
  if (activityRowsBody) {
    activityRowsBody.addEventListener('input', (e) => {
      const target = e.target;
      if (!target.classList.contains('activity-row-input')) return;
      const idx = Number(target.dataset.index);
      const field = target.dataset.field;
      if (!currentActivities[idx]) return;

      if (field === 'description') {
        currentActivities[idx].description = target.value;
      } else if (field === 'idr' || field === 'usd') {
        const numericVal = parseCurrencyNumber(target.value);
        currentActivities[idx][field] = numericVal || '';
        target.value = numericVal ? formatDotNumber(numericVal) : '';
        updateActivityTotals();
      }
    });

    activityRowsBody.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.btn-remove-activity');
      if (!removeBtn) return;
      const idx = Number(removeBtn.dataset.removeIndex);
      if (currentActivities.length <= 1) {
        currentActivities[0] = { description: '', idr: '', usd: '' };
      } else {
        currentActivities.splice(idx, 1);
      }
      renderActivityRows();
    });
  }

  const fillSampleBtn = document.getElementById('btn-fill-sample');
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', fillSampleDataStep3);
  }

  const printStep3Btn = document.getElementById('btn-print-step3');
  if (printStep3Btn) {
    printStep3Btn.addEventListener('click', () => {
      const formDetails = getFormDetailsFromInputs();
      triggerPrintPdf(formDetails);
    });
  }

  const formPpbj = document.getElementById('form-ppbj');
  if (formPpbj) {
    formPpbj.addEventListener('submit', (e) => {
      e.preventDefault();
      const detailsObj = getFormDetailsFromInputs();
      const lawanNama = (detailsObj.lawanNama || detailsObj.project || 'ELNUSA TBK.').toUpperCase();
      const objek = detailsObj.objekTransaksi || 'JKP';
      const todayStr = new Date().toISOString().slice(0, 10);
      const compactDate = todayStr.replace(/-/g, '');

      if (editingItemId !== null) {
        const idx = ppbjList.findIndex((x) => x.id === editingItemId);
        if (idx !== -1) {
          ppbjList[idx].lawanTransaksi = lawanNama;
          ppbjList[idx].objekTransaksi = objek;
          ppbjList[idx].details = detailsObj;
          showToast(`Data Pengajuan ${ppbjList[idx].nomorPengajuan} berhasil diperbarui!`);
        }
      } else {
        const randHex = Math.floor(10000 + Math.random() * 90000).toString(16).toUpperCase();
        const randSeq = Math.floor(100000 + Math.random() * 899999);
        const newItem = {
          id: Date.now(),
          nomorPengajuan: `300009B${randHex}`,
          nomorPpbj: `0002609${randSeq}`,
          tanggalPpbj: todayStr,
          referensiPpbj: `0599999${compactDate}`,
          lawanTransaksi: lawanNama,
          objekTransaksi: objek,
          status: 'Penerimaan Data di DJP',
          statusColor: 'yellow',
          hasGreenDocBtn: true,
          details: detailsObj
        };
        ppbjList.unshift(newItem);
        showToast(`Pengajuan PK/PB baru (${newItem.nomorPengajuan}) berhasil disimpan!`);
      }

      renderPpbjTable();
      showStep('step-2');
    });
  }
});


