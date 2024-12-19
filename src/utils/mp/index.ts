export function mpUpdateCheck() {
  const updateManager = uni.getUpdateManager();
  updateManager.onCheckForUpdate((res) => {
    if (res.hasUpdate) console.log(res.hasUpdate);
  });
  updateManager.onUpdateReady(() => {
    uni.showModal({
      title: '更新提示',
      content: '检测到新版本，是否下载新版本并重启小程序？',
      success(res) {
        if (res.confirm) {
          updateManager.applyUpdate();
        }
      },
    });
  });
  updateManager.onUpdateFailed(() => {
    uni.showModal({
      title: '已经有新版本了哟~',
      content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
      showCancel: false,
    });
  });
}
