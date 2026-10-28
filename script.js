// ==================== INITIAL DATA (MATCHING STEP 2.JPEG) ====================
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
      kpbpbNpwp: '0012345678215000',
      kpbpbNitku: '0012345678215000000000',
      kpbpbNama: 'PT KAWASAN INDUSTRI BATAM NUSANTARA',
      kpbpbAlamat: 'JL. HANG KESTURI KM 4 KAWASAN INDUSTRI TERPADU KABUPIL, BATAM',
      kpbpbKpp: 'KPP Madya Batam',
      kpbpbLokasi: 'Batam',
      lawanJenis: 'NPWP',
      lawanNitku: '0010016202054000000000',
      lawanNpwp: '0010016202054000',
      lawanNama: 'ELNUSA TBK.',
      lawanAlamat: 'GRAHA ELNUSA LT. 16, JL. TB SIMATUPANG KAV. 1B, CILANDAK TIMUR, JAKARTA SELATAN',
      lawanKpp: 'KPP Perusahaan Masuk Bursa',
      signerNama: 'BUDI SANTOSO',
      signerJabatan: 'DIREKTUR OPERASIONAL',
      signerTelepon: '081277009911',
      signerEmail: 'budi.santoso@kib-batam.co.id',
      signerKota: 'Batam'
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
      kpbpbNpwp: '0012345678215000',
      kpbpbNitku: '0012345678215000000000',
      kpbpbNama: 'PT KAWASAN INDUSTRI BATAM NUSANTARA',
      kpbpbAlamat: 'JL. HANG KESTURI KM 4 KAWASAN INDUSTRI TERPADU KABUPIL, BATAM',
      kpbpbKpp: 'KPP Madya Batam',
      kpbpbLokasi: 'Batam',
      lawanJenis: 'NPWP',
      lawanNitku: '0010610418093000000000',
      lawanNpwp: '0010610418093000',
      lawanNama: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
      lawanAlamat: 'GD. ADHIGRAHA LT. 4-11, JL. JEND. GATOT SUBROTO KAV. 56, JAKARTA SELATAN',
      lawanKpp: 'KPP Wajib Pajak Besar Dua',
      signerNama: 'BUDI SANTOSO',
      signerJabatan: 'DIREKTUR OPERASIONAL',
      signerTelepon: '081277009911',
      signerEmail: 'budi.santoso@kib-batam.co.id',
      signerKota: 'Batam'
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
      kpbpbNpwp: '0012345678215000',
      kpbpbNitku: '0012345678215000000000',
      kpbpbNama: 'PT KAWASAN INDUSTRI BATAM NUSANTARA',
      kpbpbAlamat: 'JL. HANG KESTURI KM 4 KAWASAN INDUSTRI TERPADU KABUPIL, BATAM',
      kpbpbKpp: 'KPP Madya Batam',
      kpbpbLokasi: 'Batam',
      lawanJenis: 'NPWP',
      lawanNitku: '0010610418093000000000',
      lawanNpwp: '0010610418093000',
      lawanNama: 'PERUSAHAAN PERSEROAN (PERSERO) PT SURVEYOR INDONESIA',
      lawanAlamat: 'GD. ADHIGRAHA LT. 4-11, JL. JEND. GATOT SUBROTO KAV. 56, JAKARTA SELATAN',
      lawanKpp: 'KPP Wajib Pajak Besar Dua',
      signerNama: 'BUDI SANTOSO',
      signerJabatan: 'DIREKTUR OPERASIONAL',
      signerTelepon: '081277009911',
      signerEmail: 'budi.santoso@kib-batam.co.id',
      signerKota: 'Batam'
    }
  }
];

let ppbjList = [...INITIAL_PPBJ_DATA];
let editingItemId = null;

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
    ? `<button type="button" class="aksi-btn aksi-green" data-action="doc" data-id="${item.id}" title="Dokumen PPBJ">
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
      <button type="button" class="aksi-btn aksi-navy" data-action="view" data-id="${item.id}" title="Lihat / Edit Form PPBJ">
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
      <button type="button" class="aksi-btn aksi-orange" data-action="partner" data-id="${item.id}" title="Data Lawan Transaksi">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      </button>
      ${greenDocBtn}
      <button type="button" class="aksi-btn aksi-gray" data-action="download" data-id="${item.id}" title="Unduh Cetakan PPBJ">
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
      item.nomorPpbj.toLowerCase().includes(q) ||
      item.referensiPpbj.toLowerCase().includes(q) ||
      item.lawanTransaksi.toLowerCase().includes(q) ||
      item.status.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="padding: 28px; color: #64748b;">Tidak ada data PPBJ yang sesuai dengan pencarian.</td>
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
          <td>${item.nomorPpbj}</td>
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
// ==================== STEP 3 FORM POPULATION & SUBMISSION ====================
function resetStep3Form() {
  editingItemId = null;
  const form = document.getElementById('form-ppbj');
  if (form) form.reset();

  const idDisplay = document.getElementById('display-id-pengajuan');
  if (idDisplay) idDisplay.textContent = '';

  activateWizardTab('perusahaan');
}

function populateStep3Form(item) {
  editingItemId = item.id;
  const d = item.details || {};

  const idDisplay = document.getElementById('display-id-pengajuan');
  if (idDisplay) idDisplay.textContent = item.nomorPengajuan;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('kpbpb-npwp', d.kpbpbNpwp);
  setVal('kpbpb-nitku', d.kpbpbNitku);
  setVal('kpbpb-nama', d.kpbpbNama);
  setVal('kpbpb-alamat', d.kpbpbAlamat);
  setVal('kpbpb-kpp', d.kpbpbKpp);
  setVal('kpbpb-lokasi', d.kpbpbLokasi);

  setVal('lawan-jenis', d.lawanJenis || 'NPWP');
  setVal('lawan-nitku', d.lawanNitku);
  setVal('lawan-npwp', d.lawanNpwp);
  setVal('lawan-nama', d.lawanNama || item.lawanTransaksi);
  setVal('lawan-alamat', d.lawanAlamat);
  setVal('lawan-kpp', d.lawanKpp);

  setVal('signer-nama', d.signerNama);
  setVal('signer-jabatan', d.signerJabatan);
  setVal('signer-telepon', d.signerTelepon);
  setVal('signer-email', d.signerEmail);
  setVal('signer-kota', d.signerKota);

  setVal('kontrak-objek', item.objekTransaksi || 'JKP');
  activateWizardTab('perusahaan');
}

function fillSampleDataStep3() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setVal('kpbpb-npwp', '0012345678215000');
  setVal('kpbpb-nitku', '0012345678215000000000');
  setVal('kpbpb-nama', 'PT KAWASAN INDUSTRI BATAM NUSANTARA');
  setVal('kpbpb-alamat', 'JL. HANG KESTURI KM 4 KAWASAN INDUSTRI TERPADU KABUPIL, BATAM');
  setVal('kpbpb-kpp', 'KPP Madya Batam');
  setVal('kpbpb-lokasi', 'Batam');

  setVal('lawan-jenis', 'NPWP');
  setVal('lawan-nitku', '0020458891054000000000');
  setVal('lawan-npwp', '0020458891054000');
  setVal('lawan-nama', 'PT SUCOFINDO (PERSERO)');
  setVal('lawan-alamat', 'GRAHA SUCOFINDO LT. 1, JL. RAYA PASAR MINGGU KAV. 34, JAKARTA SELATAN');
  setVal('lawan-kpp', 'KPP Wajib Pajak Besar Satu');

  setVal('signer-nama', 'AHMAD AZIS');
  setVal('signer-jabatan', 'MANAGER PAJAK & KEPABEANAN');
  setVal('signer-telepon', '081177889900');
  setVal('signer-email', 'azis@kib-batam.co.id');
  setVal('signer-kota', 'Batam');

  showToast('Contoh data perusahaan berhasil diisi otomatis.');
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
      showToast(`Selamat datang, ${uname}! Berhasil masuk ke Beranda PPBJ.`);
      showStep('step-2');
    });
  }

  const passkeyBtn = document.getElementById('btn-passkey-login');
  if (passkeyBtn) {
    passkeyBtn.addEventListener('click', () => {
      showToast('Autentikasi Passkey berhasil! Mengarahkan ke Beranda PPBJ...');
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
        showToast(`Mengunduh dokumen PPBJ Nomor ${item.nomorPpbj}...`);
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

  const kpbpbNitku = document.getElementById('kpbpb-nitku');
  if (kpbpbNitku) {
    kpbpbNitku.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.length >= 6) {
        const npwpEl = document.getElementById('kpbpb-npwp');
        const namaEl = document.getElementById('kpbpb-nama');
        const alamatEl = document.getElementById('kpbpb-alamat');
        if (npwpEl && !npwpEl.value) npwpEl.value = val.slice(0, 16).padEnd(16, '0');
        if (namaEl && !namaEl.value) namaEl.value = 'PT KAWASAN INDUSTRI BATAM NUSANTARA';
        if (alamatEl && !alamatEl.value) alamatEl.value = 'JL. HANG KESTURI KM 4 KAWASAN INDUSTRI TERPADU KABUPIL, BATAM';
      }
    });
  }

  const lawanNitku = document.getElementById('lawan-nitku');
  if (lawanNitku) {
    lawanNitku.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.length >= 6) {
        const npwpEl = document.getElementById('lawan-npwp');
        const namaEl = document.getElementById('lawan-nama');
        const alamatEl = document.getElementById('lawan-alamat');
        if (npwpEl && !npwpEl.value) npwpEl.value = val.slice(0, 16).padEnd(16, '0');
        if (namaEl && !namaEl.value) namaEl.value = 'PT MITRA TRANSAKSI INDONESIA';
        if (alamatEl && !alamatEl.value) alamatEl.value = 'JL. JEND. SUDIRMAN KAV. 45-46, JAKARTA SELATAN';
      }
    });
  }

  const fillSampleBtn = document.getElementById('btn-fill-sample');
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', fillSampleDataStep3);
  }

  const formPpbj = document.getElementById('form-ppbj');
  if (formPpbj) {
    formPpbj.addEventListener('submit', (e) => {
      e.preventDefault();
      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      const lawanNama = getVal('lawan-nama') || getVal('lawan-nitku') || 'PT MITRA TRANSAKSI BARU';
      const objek = getVal('kontrak-objek') || 'JKP';
      const todayStr = new Date().toISOString().slice(0, 10);
      const compactDate = todayStr.replace(/-/g, '');

      const detailsObj = {
        kpbpbNpwp: getVal('kpbpb-npwp'),
        kpbpbNitku: getVal('kpbpb-nitku'),
        kpbpbNama: getVal('kpbpb-nama'),
        kpbpbAlamat: getVal('kpbpb-alamat'),
        kpbpbKpp: getVal('kpbpb-kpp'),
        kpbpbLokasi: getVal('kpbpb-lokasi'),
        lawanJenis: getVal('lawan-jenis'),
        lawanNitku: getVal('lawan-nitku'),
        lawanNpwp: getVal('lawan-npwp'),
        lawanNama: lawanNama.toUpperCase(),
        lawanAlamat: getVal('lawan-alamat'),
        lawanKpp: getVal('lawan-kpp'),
        signerNama: getVal('signer-nama'),
        signerJabatan: getVal('signer-jabatan'),
        signerTelepon: getVal('signer-telepon'),
        signerEmail: getVal('signer-email'),
        signerKota: getVal('signer-kota')
      };

      if (editingItemId !== null) {
        const idx = ppbjList.findIndex((x) => x.id === editingItemId);
        if (idx !== -1) {
          ppbjList[idx].lawanTransaksi = lawanNama.toUpperCase();
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
          lawanTransaksi: lawanNama.toUpperCase(),
          objekTransaksi: objek,
          status: 'Penerimaan Data di DJP',
          statusColor: 'yellow',
          hasGreenDocBtn: true,
          details: detailsObj
        };
        ppbjList.unshift(newItem);
        showToast(`Pengajuan PPBJ baru (${newItem.nomorPengajuan}) berhasil disimpan!`);
      }

      renderPpbjTable();
      showStep('step-2');
    });
  }
});


