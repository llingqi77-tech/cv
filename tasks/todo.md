# Lighthouse 桌面端优化计划

## 目标分数
- Performance: 72 -> 90+
- Accessibility: 86 -> 95+
- SEO: 83 -> 90+
- Best Practices: 100 -> 100

## Phase 1: 图片优化（最大收益）
- [x] 检查现有图片体积
- [ ] 压缩 profile.png
- [ ] 压缩 interview-landing.png
- [ ] 压缩 interview-app.png
- [ ] 生成 WebP 格式
- [ ] 非首屏图片加 loading="lazy"
- [ ] Hero 区图片加 preload

## Phase 2: SEO 补全（最容易）
- [ ] 补全 index.html Meta 标签
- [ ] 添加 robots.txt
- [ ] 生成 sitemap.xml
- [ ] 确保只有一个 h1

## Phase 3: Accessibility 修复
- [ ] 检查所有 img 的 alt 属性
- [ ] 修复对比度不足
- [ ] 语义化标签

## Phase 4: Performance 优化
- [ ] 非关键脚本 defer
- [ ] Preload hints

## Phase 5: 构建部署
- [ ] 重新构建
- [ ] 提交 GitHub
