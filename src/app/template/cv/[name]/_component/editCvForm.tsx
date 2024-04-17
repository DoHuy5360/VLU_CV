"use client";

import { createReplica } from "@/actions/candidate/createReplica";
import {
	CvAction,
	CvActionType,
	CvContext,
} from "@/contexts/cvProvider";
import { ChangeEvent, useCallback, useContext } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import AddButton from "./addButton";
import {
	addExperienceAction,
	addProjectAction,
	addEducationAction,
	addSkillAction,
	addBadgeAction,
	addCertificationAction,
	addReferenceAction,
	addActivityAction,
	addHobbyAction,
} from "@/entities/addFormCV";
import FormAction from "./formAction";
import {
	deleteActivityAction,
	deleteBadgeAction,
	deleteCertificationAction,
	deleteEducationAction,
	deleteExperienceAction,
	deleteHobbyAction,
	deleteProjectAction,
	deleteReferenceAction,
	deleteSkillAction,
} from "@/entities/deleteFormCV";
import { TransferType } from "@/types/tranfer";

export default function EditCvForm({ cvName }: { cvName: string }) {
	const { state } = useContext(CvContext);
	return state === null ? (
		<div>Loading...</div>
	) : (
		<form
			className='w-2/3 px-2 pt-2 pb-20 flex flex-col gap-2 overflow-y-scroll border-slate-300 border-r-[1px]'
			action={async () => {
				await createReplica(cvName, state);
			}}
		>
			<div className='flex flex-col gap-2'>
				<Group label='Basic Information'>
					<div className='flex flex-col gap-2'>
						<div className='flex gap-0.5 w-full'>
							<EditInput
								name='File name:'
								value={state.name}
								editType='update-file-name'
								inputType='input'
							/>
							<div className='text-xs'>.pdf</div>
						</div>
						<EditInput
							name='Your name:'
							inputType='input'
							editType='update-user-name'
							value={state.attrs.head.name}
						/>
						<EditInput
							name='Apply position:'
							inputType='input'
							editType='update-user-position'
							value={state.attrs.head.position}
						/>
						<EditInput
							name='Phone:'
							inputType='input'
							editType='update-user-phone'
							value={state.attrs.head.phone}
						/>
						<EditInput
							name='Address:'
							inputType='input'
							editType='update-user-address'
							value={state.attrs.head.address}
						/>
						<EditInput
							name='Email:'
							inputType='input'
							editType='update-user-email'
							value={state.attrs.head.email}
						/>
					</div>
				</Group>
				<Group label='Goal'>
					<EditInput
						inputType='textarea'
						editType='update-user-goal'
						value={state.attrs.goal.content}
					/>
				</Group>
				<Group label='Experience' form={addExperienceAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.experience.works.map((w, i) => {
							return (
								<div className='flex flex-col gap-2 border-[1px] border-slate-200 p-1'>
									<FormAction
										deleteAction={deleteExperienceAction(i)}
									/>
									<div
										key={i}
										className='text-xs flex flex-col gap-2'
									>
										<EditInput
											name='Name:'
											value={w.name}
											editType='update-user-experience-name'
											index={i}
											inputType='input'
										/>
										<EditInput
											name='Time:'
											value={w.time}
											editType='update-user-experience-time'
											index={i}
											inputType='input'
										/>
										<EditInput
											name='Position:'
											value={w.position}
											editType='update-user-experience-position'
											index={i}
											inputType='input'
										/>
										<EditInput
											name='Tasks:'
											value={w.tasks}
											editType='update-user-experience-tasks'
											index={i}
											inputType='textarea'
										/>
									</div>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Project' form={addProjectAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.project.products.map((p, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction deleteAction={deleteProjectAction(i)} />
									<EditInput
										name='Name:'
										value={p.name}
										editType='update-user-project-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Time:'
										value={p.time}
										editType='update-user-project-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Where:'
										value={p.where}
										editType='update-user-project-where'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Member:'
										value={p.member}
										editType='update-user-project-member'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Position:'
										value={p.position}
										editType='update-user-project-position'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Tasks:'
										value={p.tasks}
										editType='update-user-project-tasks'
										index={i}
										inputType='textarea'
									/>
									<EditInput
										name='Techs:'
										value={p.techs}
										editType='update-user-project-techs'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Education' form={addEducationAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.education.classes.map((c, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction
										deleteAction={deleteEducationAction(i)}
									/>
									<EditInput
										name='Time:'
										value={c.time}
										editType='update-user-education-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Major:'
										value={c.major}
										editType='update-user-education-major'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='School:'
										value={c.school}
										editType='update-user-education-school'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Status:'
										value={c.status}
										editType='update-user-education-status'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Skill' form={addSkillAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.skill.skills.map((s, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction deleteAction={deleteSkillAction(i)} />
									<EditInput
										name='Name:'
										value={s.name}
										editType='update-user-skill-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Status:'
										value={s.status}
										editType='update-user-skill-status'
										index={i}
										inputType='textarea'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Badge' form={addBadgeAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.badge.achievements.map((e, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction deleteAction={deleteBadgeAction(i)} />
									<EditInput
										name='Name:'
										value={e.name}
										editType='update-user-badge-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Time:'
										value={e.time}
										editType='update-user-badge-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Where:'
										value={e.where}
										editType='update-user-badge-where'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Certification' form={addCertificationAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.certificate.certificates.map((e, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction
										deleteAction={deleteCertificationAction(i)}
									/>
									<EditInput
										name='Name:'
										value={e.name}
										editType='update-user-certificate-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Time:'
										value={e.time}
										editType='update-user-certificate-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Where:'
										value={e.where}
										editType='update-user-certificate-where'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Reference' form={addReferenceAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.reference.references.map((e, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction
										deleteAction={deleteReferenceAction(i)}
									/>
									<EditInput
										name='Name:'
										value={e.name}
										editType='update-user-reference-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Where:'
										value={e.where}
										editType='update-user-reference-where'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Phone:'
										value={e.phone}
										editType='update-user-reference-phone'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Activity' form={addActivityAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.activity.activities.map((e, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction
										deleteAction={deleteActivityAction(i)}
									/>
									<EditInput
										name='Time:'
										value={e.time}
										editType='update-user-activity-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Name:'
										value={e.name}
										editType='update-user-activity-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Position:'
										value={e.position}
										editType='update-user-activity-position'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Tasks:'
										value={e.tasks}
										editType='update-user-activity-tasks'
										index={i}
										inputType='textarea'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Hobby' form={addHobbyAction()}>
					<div className='flex flex-col gap-3'>
						{state.attrs.hobby.hobbies.map((e, i) => {
							return (
								<div
									key={e.id}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<FormAction deleteAction={deleteHobbyAction(i)} />
									<EditInput
										name='Name:'
										value={e.name}
										editType='update-user-hobby-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Status:'
										value={e.status}
										editType='update-user-hobby-status'
										index={i}
										inputType='input'
									/>
								</div>
							);
						})}
					</div>
				</Group>
				<Group label='Other'>
					<div className='flex flex-col gap-3'>
						<EditInput
							value={state.attrs.other.content}
							editType='update-user-other-content'
							inputType='textarea'
						/>
					</div>
				</Group>
			</div>
			<button
				className='w-fit px-4 py-2 ml-auto bg-green-300 rounded-lg text-xs'
				type='submit'
			>
				Save
			</button>
		</form>
	);
}

function Group({
	label,
	children,
	form,
}: {
	label: string;
	children: JSX.Element;
	form?: CvAction;
}) {
	return (
		<fieldset className='border border-solid border-slate-300 p-3'>
			<legend className='flex justify-between items-center w-full'>
				<div className='whitespace-nowrap'>{label}</div>
				<div className='h-[0.5px] w-full bg-slate-300'></div>
				<div className='flex gap-2 items-center'>
					{form && <AddButton data={form} />}
				</div>
			</legend>
			{children}
		</fieldset>
	);
}
function EditInput({
	inputType,
	name,
	editType,
	index,
	value,
}: {
	inputType: "input" | "textarea";
	name?: string;
	editType: CvActionType;
	index?: number;
	value: string;
}) {
	const { dispatch } = useContext(CvContext);
	const f = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			dispatch({
				type: editType,
				value: e.target.value,
				index: index as number,
			});
		},
		[]
	);
	return (
		<div className='flex items-center gap-1 w-full'>
			{name && (
				<label
					className='text-xs cursor-pointer whitespace-nowrap'
					htmlFor={`${editType}-${index}`}
				>
					{name}
				</label>
			)}
			{inputType === "input" ? (
				<input
					className='border-slate-200 border-[1px] px-2 text-xs w-full'
					onChange={f}
					value={value}
					type='text'
					name={name}
					id={`${editType}-${index}`}
				/>
			) : (
				<textarea
					name={name}
					id={`${editType}-${index}`}
					className='border-slate-200 border-[1px] p-2 text-xs resize-none h-36 w-full'
					onChange={f}
					value={value}
				></textarea>
			)}
		</div>
	);
}
