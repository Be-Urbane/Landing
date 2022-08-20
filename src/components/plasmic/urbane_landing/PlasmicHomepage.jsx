// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTkTpRrBv1t1xdrRqPytP9
// Component: 8uoN1T4KzVYoM
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useScreenVariants as useScreenVariantsfEdNgTvqmIKpV } from "./PlasmicGlobalVariant__Screen" // plasmic-import: fEDNgTvqmIKpV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_urbane_landing.module.css" // plasmic-import: iTkTpRrBv1t1xdrRqPytP9/projectcss
import * as sty from "./PlasmicHomepage.module.css" // plasmic-import: 8uoN1T4KzVYoM/css

export const PlasmicHomepage__VariantProps = new Array()

export const PlasmicHomepage__ArgProps = new Array()

export function Head() {
  return <></>
}

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfEdNgTvqmIKpV(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox___0QrsA)}>
            <div className={classNames(projectcss.all, sty.freeBox__m92Gp)} />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__k68U)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__k33I0)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___0S9Jy)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cwfaq
                    )}
                  >
                    {"Urbane"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7S52W
                    )}
                  >
                    {"Invite-only dinners for ambitious doers"}
                  </div>
                </div>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__jujT2)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qRqDo
                )}
              >
                {"San Francisco | New York | Los Angeles"}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__vEbH8)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage"
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */
