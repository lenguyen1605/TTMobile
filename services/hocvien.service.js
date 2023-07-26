import axiosClient from "./axiosClient.setup"
const { get, post } = axiosClient
const hv = `SmallTMS/HocVien/`

export const HocVienService = {
    HocPhi: ServiceGeneratorDM_Filter('QuanLyHocPhi')
}

function ServiceGeneratorDM_Filter(opt) {
    return {
        GetHP: (data) => {
            return post(hv + 'Get' + opt, data)
        }
    }
}