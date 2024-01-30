import React from "react"

const MailIcon = ({ color, size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon icon-tabler icon-tabler-mail"
			width={size}
			height={size}
			viewBox="0 0 25 23"
			strokeWidth="3"
			stroke={color}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
			<path d="M3 7l9 6l9 -6" />
		</svg>
	)
}

const LinkedinIcon = ({ color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M30.34 2.95996H6.65996C4.61756 2.95996 2.95996 4.61756 2.95996 6.65996V30.34C2.95996 32.3824 4.61756 34.04 6.65996 34.04H30.34C32.3824 34.04 34.04 32.3824 34.04 30.34V6.65996C34.04 4.61756 32.3824 2.95996 30.34 2.95996ZM12.58 14.8V28.86H8.13996V14.8H12.58ZM8.13996 10.7078C8.13996 9.67176 9.02796 8.87996 10.36 8.87996C11.692 8.87996 12.5282 9.67176 12.58 10.7078C12.58 11.7438 11.7512 12.58 10.36 12.58C9.02796 12.58 8.13996 11.7438 8.13996 10.7078ZM28.86 28.86H24.42C24.42 28.86 24.42 22.0076 24.42 21.46C24.42 19.98 23.68 18.5 21.83 18.4704H21.7708C19.98 18.4704 19.24 19.9948 19.24 21.46C19.24 22.1334 19.24 28.86 19.24 28.86H14.8V14.8H19.24V16.6944C19.24 16.6944 20.6682 14.8 23.5394 14.8C26.4772 14.8 28.86 16.8202 28.86 20.9124V28.86Z"
				fill={color}
			/>
		</svg>
	)
}

const GitHubIcon = ({ color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 37 37" fill={color} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16.8039 3.23757C9.71221 4.0084 4.00804 9.71257 3.23721 16.6501C2.46638 23.8959 6.62888 30.3709 12.9497 32.8376C13.4122 32.9917 13.8747 32.6834 13.8747 32.0667V29.6001C13.8747 29.6001 13.258 29.7542 12.4872 29.7542C10.3289 29.7542 9.40388 27.9042 9.24971 26.8251C9.09554 26.2084 8.78721 25.7459 8.32471 25.2834C7.86221 25.1292 7.70804 25.1292 7.70804 24.9751C7.70804 24.6667 8.17054 24.6667 8.32471 24.6667C9.24971 24.6667 10.0205 25.7459 10.3289 26.2084C11.0997 27.4417 12.0247 27.7501 12.4872 27.7501C13.1039 27.7501 13.5664 27.5959 13.8747 27.4417C14.0289 26.3626 14.4914 25.2834 15.4164 24.6667C11.8705 23.8959 9.24971 21.8917 9.24971 18.5001C9.24971 16.8042 10.0205 15.1084 11.0997 13.8751C10.9455 13.5667 10.7914 12.7959 10.7914 11.7167C10.7914 11.1001 10.7914 10.3292 11.0997 9.71257C11.0997 9.40423 11.408 9.25007 11.5622 9.25007H11.7164C12.4872 9.40423 14.0289 9.86673 15.4164 11.2542C16.3414 10.9459 17.4205 10.7917 18.4997 10.7917C19.5789 10.7917 20.658 10.9459 21.583 11.2542C22.9705 9.86673 24.6664 9.40423 25.4372 9.25007H25.5914C25.8997 9.25007 26.0539 9.40423 26.208 9.71257C26.208 10.3292 26.208 11.1001 26.208 11.7167C26.208 12.9501 26.0539 13.5667 25.8997 13.8751C26.9789 15.1084 27.7497 16.6501 27.7497 18.5001C27.7497 21.8917 25.1289 23.8959 21.583 24.6667C22.508 25.4376 23.1247 26.8251 23.1247 28.2126V32.2209C23.1247 32.6834 23.5872 33.1459 24.2039 32.9917C29.908 30.6792 33.9164 25.1292 33.9164 18.6542C33.9164 9.40423 26.0539 2.1584 16.8039 3.23757Z"
				fill={color}
			/>
		</svg>
	)
}

const TwitterIcon = ({ color, size }) => {
	return (
		<svg width="37" height="37" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_658_458)">
				<path
					d="M8.13996 0.959961C5.27912 0.959961 2.95996 3.27912 2.95996 6.13996V26.86C2.95996 29.7208 5.27912 32.04 8.13996 32.04H28.86C31.7208 32.04 34.04 29.7208 34.04 26.86V6.13996C34.04 3.27912 31.7208 0.959961 28.86 0.959961H8.13996ZM9.68356 7.61996H15.5573L19.7285 13.5472L24.79 7.61996H26.64L20.5639 14.7338L28.0564 25.38H22.1841L17.3437 18.5032L11.47 25.38H9.61996L16.5083 17.3166L9.68356 7.61996ZM12.5164 9.09996L22.9559 23.9H25.2236L14.7841 9.09996H12.5164Z"
					fill="#DAD7CB"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_658_458"
					x="-1.04004"
					y="0.959961"
					width="39.0801"
					height="39.0801"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_658_458" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_658_458" result="shape" />
				</filter>
			</defs>
		</svg>
	)
}

const LinkIcon = ({ color, size }) => {
	return (
		<svg
			className="hover:text-primary"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke={color}
			fill='none'
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 15l6 -6" />
			<path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
			<path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
		</svg>
	)
}

export default { MailIcon, LinkedinIcon, GitHubIcon, TwitterIcon, LinkIcon }
