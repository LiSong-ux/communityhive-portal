// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist', // �����Ŀ¼
  lintOnSave: true, // �ڱ���ʱУ���ʽ
  productionSourceMap: false, // ���������Ƿ����� SourceMap
  devServer: {
    open: true, // ����������Ƿ�������
    host: '0.0.0.0',
    port: 8080, // ����˿�
    https: false,
    hotOnly: false,
    proxy: null, // ���ô���
    before: app => {}
  },
}